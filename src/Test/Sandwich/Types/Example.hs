{-# LANGUAGE TypeFamilies #-}

-- |

module Test.Sandwich.Types.Example where

import Control.Exception
import Data.Typeable (Typeable)
import Control.Monad.Trans.Reader
import qualified Test.QuickCheck as QC


-- | A type class for examples
class Example e where
  type Arg e
  type Arg e = ()
  evaluateExample :: e -> ReaderT (ItemContext (Arg e)) IO Result

data Dummy = Dummy

instance Example Dummy where
  evaluateExample dummy = undefined

-- * Item context

data ItemContext a = ItemContext {
  itemContextParams :: Params
  , itemContextProgressCallback :: Progress -> IO ()
  , itemContextArg :: a
  }

data Params = Params {
  paramsQuickCheckArgs  :: QC.Args
, paramsSmallCheckDepth :: Int
} deriving (Show)

type Progress = (Int, Int)

-- * Results

-- | The result of running an example
data Result = Result {
  resultInfo :: String
, resultStatus :: ResultStatus
} deriving (Show, Typeable)

data ResultStatus =
    Success
  | Pending (Maybe Location) (Maybe String)
  | Failure (Maybe Location) FailureReason
  deriving (Show, Typeable)

data FailureReason =
    NoReason
  | Reason String
  | ExpectedButGot (Maybe String) String String
  | Error (Maybe String) SomeException
  deriving (Show, Typeable)

-- | @Location@ is used to represent source locations.
data Location = Location {
  locationFile :: FilePath
, locationLine :: Int
, locationColumn :: Int
} deriving (Eq, Show, Read)
