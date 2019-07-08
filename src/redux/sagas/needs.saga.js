import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNeeds(action) {
    console.log(action.payload);
    try {
        yield axios.put(`/api/need/${action.payload.id}`, action.payload);
        yield put({
            type: 'SET_REVIEW',
            payload: action.payload
        });
        console.log(action.payload);
    } catch (err) {
        console.log('error in needs saga:', err);
    }
}

function* needsSaga() {
    yield takeLatest('SET_NEEDS', addNeeds);
}

export default needsSaga;