{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE LambdaCase #-}
module Main where

import Control.Concurrent.Async
import Control.Monad
import Control.Monad.Trans.Class
import Control.Monad.Trans.Reader
import Control.Monad.Trans.State
import Control.Scheduler
import Data.Function
import Test.Sandwich
import Test.Sandwich.Interpreters.PrettyShow
import Test.Sandwich.Interpreters.RunTreeScheduler
import Test.Sandwich.Types.Example
import Test.Sandwich.Types.Spec
import UI.NCurses

import qualified Test.Sandwich.Interpreters.NCursesTest as N


topSpec :: TopSpec
topSpec = do
  before "asdf" (\() -> putStrLn "Before") $ do
    it "does the first thing" pending
    it "does the second thing" pending
    it "does the third thing" pending
    describe "nested stuff" $ do
      it "does a nested thing" pending

  around "some around" (\action -> action (() :> ())) $ do
    it "does 1" pending
    it "does 2" pending
  
  introduce "Intro a string" (\() -> getLine >>= \s -> return (s :> ())) (\_ -> return ()) $ do
    it "uses the string" $ \(str :> ()) -> do
      putStrLn $ "Got the string: " <> str
      return $ Result "" Success

    it "uses the string again" $ \(str :> ()) -> do
      putStrLn $ "Got the string here: " <> str
      return $ Result "" Success

  it "does a thing" $ \() -> do
    putStrLn "HI"
    return $ Result "" Success

  describe "it does this thing also" $ do
    it "does a sub-test" pending

  describeParallel "it does this thing also" $ do
    it "does a sub-test 1" pending
    it "does a sub-test 2" pending
    it "does a sub-test 3" pending

-- main :: IO ()
-- main = putStrLn $ prettyShow topSpec

-- main2 = traverse (\x -> [show x]) topSpec

main = do
  withScheduler_ (ParN 2) $ \sched -> do
    asyncUnit <- async (return ())
    rt <- runReaderT (runTree topSpec) (asyncUnit, sched)

    print rt

    runCurses $ do
      setEcho False
      w <- defaultWindow

      greenColorID <- newColorID ColorGreen ColorDefault 1
      redColorID <- newColorID ColorRed ColorDefault 2
      yellowColorID <- newColorID ColorYellow ColorDefault 3
      defaultColorID <- newColorID ColorDefault ColorDefault 4

      updateWindow w $ do
        drawBox Nothing Nothing

        drawRunTree rt

      render

      fix $ \loop -> do
        getEvent w Nothing >>= \case
          Nothing -> loop
          Just ev' -> if ev' == EventCharacter 'q' then return () else loop


drawRunTree :: [RunTree] -> Update ()
drawRunTree rt = do
  runStateT (drawRunTree' rt) (2, 2)
  return ()


drawRunTree' :: [RunTree] -> StateT (Integer, Integer) Update ()
drawRunTree' rts = do
  (line, ch) <- get

  forM_ rts $ \rt -> do
    drawRunTree'' rt
    advanceLine

drawRunTree'' :: RunTree -> StateT (Integer, Integer) Update ()
drawRunTree'' (RunTreeSingle {..}) = do
  setPosition
  lift $ drawString runTreeLabel
drawRunTree'' (RunTreeGroup {..}) = do
  setPosition
  lift $ drawString runTreeLabel
  advanceLine
  advanceColumn
  drawRunTree' runTreeChildren
  retreatColumn
drawRunTree'' (RunTreeGroupWithStatus {..}) = do
  setPosition
  lift $ drawString runTreeLabel
  advanceLine
  advanceColumn
  drawRunTree' runTreeChildren
  retreatColumn

indent = 4

advanceLine = do
  modify $ \(line, ch) -> (line + 1, ch)
  setPosition
advanceColumn = do
  modify $ \(line, ch) -> (line, ch + indent)
  setPosition
retreatColumn = do
  modify $ \(line, ch) -> (line, ch - indent)
  setPosition

setPosition = do
  (line, ch) <- get
  lift $ moveCursor line ch
