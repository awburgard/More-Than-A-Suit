import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getAppointment(action) {
    try {
        console.log('Get Appointment', action);
        const getResponse = yield axios.get('/googlecal/event');
        console.log(getResponse);
        yield put({
            type: 'SET_APPOINTMENT',
            payload: getResponse.data,
        });
    } catch (error) {
        console.log('Error with get appointment:', error);
    }
}

function* postAppointment(action) {
    try {
        yield axios.post('api/appointment', action.payload);
        yield put({
            type: 'GET_APPOINTMENT',
        });

    } catch (error) {
        console.log('Error with posting appointment:', error);
    }
}

function* rootSaga() {
    yield takeEvery('GET_APPOINTMENT', getAppointment);
    yield takeEvery('POST_APPOINTMENT', postAppointment);
}

export default rootSaga;