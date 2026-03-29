import { call, put, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../authSlice';
// The function that makes the actual API call
async function loginApi(credentials: any) {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }
  
  return await response.json();
}

// The Worker Saga: handles the side effect
function* handleLogin(action: any): any {
  try {
    const data = yield call(loginApi, action.payload);
    // On success, dispatch loginSuccess with the user data and token
    yield put(loginSuccess({ user: data, token: data.token }));
  } catch (error: any) {
    // On failure, dispatch loginFailure with the error message
    yield put(loginFailure(error.message));
  }
}

// The Watcher Saga: watches for loginRequest actions
export function* watchAuth() {
  yield takeLatest(loginRequest.type, handleLogin);
}