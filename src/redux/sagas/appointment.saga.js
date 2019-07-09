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

function* updateAppointmentType(action) {
    try {
        // const googleEvent = {
        //     summary: '',
        //     description: '',
        //     start: '',
        //     end: '',
        // };
        const gentlemanUpdate = {
            appointment_type: action.payload.appointment_type,
            appointment_date: action.payload.appointment_date,
            appointment_time: action.payload.time
        };
        // google calendar API calendar use - googleEvent
        // yield axios.post('/googlecal/event', googleEvent);
        yield axios.put(`api/appointment/${action.payload.id}`, action.payload);
        yield put({
            type: 'SET_REVIEW',
            payload: action.payload,
        })
    } catch (error) {
        console.log('Error posting and updating appointment information:', error);
    }
}

function* rootSaga() {
    yield takeEvery('GET_APPOINTMENT', getAppointment);
    yield takeEvery('POST_APPOINTMENT', postAppointment);
}

export default rootSaga;