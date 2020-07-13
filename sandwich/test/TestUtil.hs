{-# LANGUAGE DataKinds #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE OverloadedStrings #-}

-- |

module TestUtil where

import Control.Concurrent
import Control.Concurrent.Async
import Control.Concurrent.STM
import qualified Control.Exception as E
import Control.Exception.Safe
import Control.Monad.IO.Class
import Control.Monad.Logger
import Control.Monad.Trans.Writer
import Data.Either
import Data.Foldable
import qualified Data.List as L
import Data.String.Interpolate.IsString
import GHC.Stack
import System.Exit
import Test.Sandwich
import Test.Sandwich.Internal

-- * Main function

mainWith :: (HasCallStack) => WriterT [SomeException] IO () -> IO ()
mainWith tests = do
  results <- execWriterT tests

  case results of
    [] -> do
      putStrLn "All tests succeeded!"
    xs -> do
      putStrLn [i|\n\n#{length xs} test(s) failed\n\n|]
      forM_ xs $ \x -> putStrLn [i|#{x}\n\n|]
      exitWith (ExitFailure 1)


-- * Values

data FakeDatabase = FakeDatabase deriving Show
fakeDatabaseLabel = Label :: Label "fakeDatabase" FakeDatabase

someUserError = userError "Oh no"
someUserErrorWrapped = SomeExceptionWithEq $ SomeException $ userError "Oh no"

-- * Helpers

run :: MonadIO m => IO () -> WriterT [SomeException] m ()
run test = (liftIO $ tryAny test) >>= \case
  Left err -> tell [err]
  Right () -> return ()

throwSomeUserError :: (MonadIO m) => m ()
throwSomeUserError = liftIO $ throwIO someUserError

runAndGetResults :: (HasCallStack) => TopSpec -> IO [Result]
runAndGetResults spec = do
  finalTree <- runSandwichTree defaultOptions spec
  fixedTree <- atomically $ mapM fixRunTree finalTree
  return $ fmap statusToResult $ concatMap getStatuses fixedTree

runAndGetResultsAndLogs :: TopSpec -> IO ([Result], [[LogStr]])
runAndGetResultsAndLogs spec = do
  finalTree <- runSandwichTree defaultOptions spec
  getResultsAndMessages <$> fixTree finalTree

fixTree rts = atomically $ mapM fixRunTree rts

getResultsAndMessages fixedTree = (results, msgs)
  where
    results = fmap statusToResult $ concatMap getStatuses fixedTree
    msgs = getMessages fixedTree

getMessages fixedTree = fmap (toList . (fmap logEntryStr)) $ concatMap getLogs fixedTree

getStatuses :: (HasCallStack) => RunNodeWithStatus context s l t -> [(String, s)]
getStatuses (RunNodeIt {..}) = [(runTreeLabel runNodeCommon, runTreeStatus runNodeCommon)]
getStatuses node@(RunNodeIntroduce {..}) = (runTreeLabel $ runNodeCommon, runTreeStatus $ runNodeCommon) : (concatMap getStatuses runNodeChildrenAugmented)
getStatuses node@(RunNodeIntroduceWith {..}) = (runTreeLabel $ runNodeCommon, runTreeStatus $ runNodeCommon) : (concatMap getStatuses runNodeChildrenAugmented)
getStatuses node = (runTreeLabel $ runNodeCommon node, runTreeStatus $ runNodeCommon node) : (concatMap getStatuses (runNodeChildren node))

getLogs :: (HasCallStack) => RunNodeWithStatus context s l t -> [l]
getLogs (RunNodeIt {..}) = [runTreeLogs runNodeCommon]
getLogs (RunNodeIntroduce {..}) = (runTreeLogs runNodeCommon) : (concatMap getLogs runNodeChildrenAugmented)
getLogs (RunNodeIntroduceWith {..}) = (runTreeLogs runNodeCommon) : (concatMap getLogs runNodeChildrenAugmented)
getLogs node = (runTreeLogs $ runNodeCommon node) : (concatMap getLogs (runNodeChildren node))

statusToResult :: (HasCallStack) => (String, Status) -> Result
statusToResult (label, NotStarted) = error [i|Expected status to be Done but was NotStarted for label '#{label}'|]
statusToResult (label, Running {}) = error [i|Expected status to be Done but was Running for label '#{label}'|]
statusToResult (_, Done _ _ result) = result

mustBe :: (HasCallStack, Eq a, Show a) => a -> a -> IO ()
mustBe x y
  | x == y = return ()
  | otherwise = error [i|Expected #{y} but got #{x}|]

waitUntilRunning status = atomically $ do
  readTVar status >>= \case
    Running {} -> return ()
    _ -> retry

-- printFixedRunTree :: RunNodeFixed -> IO ()
-- printFixedRunTree = printFixedRunTree' 0
--   where
--     printFixedRunTree' :: Int -> RunNodeFixed -> IO ()
--     printFixedRunTree' indent (RunTreeGroup {..}) = do
--       putStrLn [i|#{indentation}#{runTreeLabel} [#{statusResult runTreeStatus}]|]
--       forM_ runTreeChildren (printFixedRunTree' (indent + 1))
--       where indentation = L.replicate (indent * 4) ' '
--     printFixedRunTree' indent (RunTreeSingle {..}) = putStrLn [i|#{indentation}#{runTreeLabel} [#{statusResult runTreeStatus}]|]
--       where indentation = L.replicate (indent * 4) ' '
