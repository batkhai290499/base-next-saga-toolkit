import { combineReducers } from 'redux';
import nftReducer from './nft/nft.reducer';

const rootReducer = combineReducers({
  nfts: nftReducer,
});

export default rootReducer;

export type StoreState = ReturnType<typeof rootReducer>;
