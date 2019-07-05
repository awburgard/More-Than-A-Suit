import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postTwilio(action) {
    try {
        // post will send whatever is on the action.payload to the server route
        console.log(action.payload)
        yield axios.post(`/api/twilio/confirm/text`, action.payload);
    } catch (error) {
        console.log('Error sending confirmation text:', error);
    }
}

function* twilioSaga() {
    yield takeEvery('POST_TWILIO', postTwilio);
}

export default twilioSaga;