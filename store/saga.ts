import { fork, all } from '@redux-saga/core/effects';
import orderSaga from './nft/nft.saga';

export default function* rootSaga() {
  try {
    yield all([fork(orderSaga)]);
  } catch (e) {
    console.log(e);
  }
}
