import { createReducer } from 'typesafe-actions';
import { getListNftAction } from './nft.action';
import { NFTStore } from 'types/models/nft';

const INITIAL_STATE: any = {
  nfts: [],
  loading: false,
  error: '',
};

const nftReducer = createReducer<any>(INITIAL_STATE)
  .handleAction(getListNftAction.request, (state, action) => ({
    ...state,
    loading: true,
  }))
  .handleAction(getListNftAction.success, (state, action) => ({
    ...state,
    nfts: action.payload,
    loading: false,
    error: '',
  }))
  .handleAction(getListNftAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));
export default nftReducer;
