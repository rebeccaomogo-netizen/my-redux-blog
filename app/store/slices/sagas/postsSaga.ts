import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../postsSlice';

// API call to fetch posts
async function fetchPostsApi() {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  if (!response.ok) throw new Error('Failed to fetch posts');
  const data = await response.json();
  return data.posts;
}

// Worker Saga
function* handleFetchPosts(): any {
  try {
    const posts = yield call(fetchPostsApi);
    yield put(fetchPostsSuccess(posts));
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message));
  }
}

// Watcher Saga
export function* watchPosts() {
  yield takeLatest(fetchPostsRequest.type, handleFetchPosts);
}