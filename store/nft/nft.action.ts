import { createAsyncAction } from 'typesafe-actions';
import { NFTList, TopNFTRequestBody } from 'types/models/nft';

export const getListNftAction = createAsyncAction(
  'GET_LIST_NFT_REQUESTED',
  'GET_LIST_NFT_SUCCESS',
  'GET_LIST_NFT_FAILURE',
)<any, any, string>();
