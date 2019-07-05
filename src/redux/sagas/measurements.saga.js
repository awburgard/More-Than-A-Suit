import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addMeasurements(action) {
    console.log(action.payload);
    try {
        const response = yield axios.put('/api/measurements', action.payload);
        yield put({
            type: 'SET_REVIEW',
            payload: {
                ...action.payload
            }
        });
        console.log(action.payload);
    } catch (err) {
        console.log('error HELP:', err);
    }
}

function* measurementsSaga() {
    yield takeLatest('SET_MEASUREMENTS', addMeasurements);
}

export default measurementsSaga;