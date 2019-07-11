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

function* getAdminAppointment(action) {
    try {
        const getResponse = yield axios.get('/api/admin/appointments');
        yield put({
            type: 'SET_ADMIN_APPOINTMENT',
            payload: getResponse.data,
        });
    } catch (error) {
        console.log('Error with get appointment:', error);
    }
}

function* postAppointment(action) {
    try {
        const googleEvent = {
            summary: this.props.info.first_name + ' ' + this.props.info.last_name,
            description: this.props.info.appointmentType,
            start: this.props.info.selectedTime,
            end: this.props.info.selectedTime,
        };

        yield axios.post('/googlecal/event', googleEvent);
        yield put({
            type: 'GET_APPOINTMENT',
        });

    } catch (error) {
        console.log('Error with posting appointment:', error);
    }
}

function* updateAppointmentInfo(action) {
    try {
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
    yield takeEvery('UPDATE_APPOINTMENT_INFO', updateAppointmentInfo);
    yield takeEvery('POST_APPOINTMENT', postAppointment);
    yield takeEvery('GET_ADMIN_APPOINTMENT', getAdminAppointment);
}

export default rootSaga;
