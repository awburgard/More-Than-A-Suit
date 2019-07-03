import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on 'GET_TEMPLATE' actions
function* getCalendarEvents(action) {
  try {
    // call to get API route and store the response
    const getResponse = yield axios.get('/googlecal/event/event');
    // after successful get API call use put to set the data
    yield put({
        type: 'SET_CALENDAR',
        payload: getResponse.data,
    });
  } catch (error) {
    console.log('Error with get calendar:', error);
  }
}

// worker Saga: will be fired on 'POST_CALENDAR' actions
function* postCalendarEvents(action) {
  try {
    // post will send whatever is on the action.payload to the server route
    yield axios.post(`https://www.googleapis.com/calendar/v3/calendars/primary/events?
                        conferenceDataVersion=0&
                        maxAttendees=1&
                        sendNotifications=true&
                        sendUpdates=all&
                        supportsAttachments=false&
                        fields=end%2FdateTime%2Cstart%2FdateTime%2Csummary&
                        key={YOUR_API_KEY}`,
                    action.payload);
    // on successful post the 'GET_TEMPLATES' saga is dispateched (put)
    yield put({
        type: 'GET_CALENDAR',
    });cs

  } catch (error) {
    console.log('Error with posting', error);
  }
}

function* templateSaga() {
  yield takeEvery('GET_CALENDAR', getCalendarEvents);
  yield takeEvery('POST_CALENDAR', postCalendarEvents);
}

export default templateSaga;
