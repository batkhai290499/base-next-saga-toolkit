import { call, put, takeLatest } from 'redux-saga/effects';
import { getListNftAction } from './nft.action';
import { NFTList } from 'types/models/nft';
import axios from 'axios';
import { END } from 'redux-saga';

function* handleGetNFTs(action: ReturnType<typeof getListNftAction.request>) {
  try {
    const response: NFTList = yield call(() =>
      axios.get('https://jsonplaceholder.typicode.com/users'),
    );

    console.log('call here', response.data[0]);

    yield put(getListNftAction.success(response.data[0]));
    yield put(END);
  } catch (e: any) {
    yield put(getListNftAction.failure(e));
  }
}

export default function* orderSaga() {
  yield takeLatest(getListNftAction.request, handleGetNFTs);
}
