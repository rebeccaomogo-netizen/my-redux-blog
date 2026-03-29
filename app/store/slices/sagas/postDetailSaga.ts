import { call, put, takeLatest } from 'redux-saga/effects';

// API call to fetch a single post by ID
async function fetchPostByIdApi(id: string) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!response.ok) throw new Error('Post not found');
  return await response.json();
}

// Worker Saga
function* handleFetchPostDetail(action: any): any {
  try {
    const post = yield call(fetchPostByIdApi, action.payload);
    // We reuse the posts slice or you can create a 'selectedPost' state
    yield put({ type: 'posts/fetchPostDetailSuccess', payload: post });
  } catch (error: any) {
    yield put({ type: 'posts/fetchPostDetailFailure', payload: error.message });
  }
}

// Watcher
export function* watchPostDetail() {
  yield takeLatest('posts/fetchPostDetailRequest', handleFetchPostDetail);
}