import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addContactInfo(action) {
    console.log(action.payload);
    try {
      yield axios.post('/api/info', action.payload);
      yield put({
        type: 'SET_REVIEW'
      });
      console.log(action.payload);
    } catch (err) {
      console.log('error HELP:', err);
    }
  }

function* contactInfoSaga() {
    yield takeLatest('POST_CONTACT_INFO', addContactInfo);
  }
  
  export default contactInfoSaga;  