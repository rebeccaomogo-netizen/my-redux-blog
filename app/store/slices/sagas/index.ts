import { all, fork } from 'redux-saga/effects';
import { watchAuth } from './authMainSaga';
import { watchPosts } from './postsSaga';
import { watchPostDetail } from './postDetailSaga'; // Import it

export default function* rootSaga() {
  yield all([
    fork(watchAuth),
    fork(watchPosts),
    fork(watchPostDetail), // Add it here
  ]);
}