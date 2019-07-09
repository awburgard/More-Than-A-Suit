import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on 'GET_TEMPLATE' actions
function* getReview(action) {
  try {
    // call to get API route and store the response
    const getResponse = yield axios.get(`/api/review/${action.payload.id}`);
    // after successful get API call use put to set the data
    yield put({
        type: 'SET_REVIEW',
        payload: getResponse.data[0],
    });
  } catch (error) {
    console.log(`Error with getting review: ${error}`);
  }
}

// worker Saga: will be fired on 'POST_TEMPLATE' actions
function* putReview(action) {
  try {
    // post will send whatever is on the action.payload to the server route
    yield axios.put(`api/review/${action.payload.id}`, action.payload);
    // on successful post the 'GET_TEMPLATES' saga is dispateched (put)
    yield put({
        type: 'GET_REVIEW',
        payload: action.payload
    });

  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* confirmationSaga() {
  yield takeEvery('GET_REVIEW', getReview);
  yield takeEvery('PUT_REVIEW', putReview);
}

export default confirmationSaga;
