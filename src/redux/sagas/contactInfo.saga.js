import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addContactInfo(action) {
    try {
        const response = yield axios.post('/api/info', action.payload);
        yield put({
            type: 'SET_REVIEW',
            payload: {
                ...action.payload,
                id: response.data,
            }
        });
        } catch (err) {
        console.log('error HELP:', err);
    }
}

function* contactInfoSaga() {
    yield takeLatest('SET_CONTACT_INFO', addContactInfo);
}

export default contactInfoSaga;