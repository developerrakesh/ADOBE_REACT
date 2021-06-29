import axios from 'axios';
import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from '../Actions'
import {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} from '../ActionCreators';
import {delay, call, put, takeEvery, takeLatest} from 'redux-saga/effects';

function getUsersApi() {
    return  axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data);
}

// generators
function* fetchUsers() {
    try {
        yield delay(200);
        const users = yield call(getUsersApi);
        // yield put({type:FETCH_USERS_REQUEST, payload: users});
        yield put(fetchUsersSuccess(users)); // dispatch(fetchUsersSuccess(response.data))
    } catch(e) {
        yield put(fetchUsersFailure(e));
    }
}

function* userSaga() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default userSaga;