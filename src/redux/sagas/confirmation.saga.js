import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { response } from 'express';

// worker Saga: will be fired on 'GET_TEMPLATE' actions
function* getReview(action) {
  try {
    // call to get API route and store the response
    const getResponse = yield axios.get(`/api/review/${action.payload}`);
    // after successful get API call use put to set the data
    yield put({
        type: 'SET_REVIEW',
        payload: getResponse.data,
    });
  } catch (error) {
    console.log(`Error with getting review: ${error}`);
  }
}

// worker Saga: will be fired on 'POST_TEMPLATE' actions
function* postTemplate(action) {
  try {
    // post will send whatever is on the action.payload to the server route
    yield axios.post('api/user/logout', action.payload);
    // on successful post the 'GET_TEMPLATES' saga is dispateched (put)
    yield put({
        type: 'GET_TEMPLATES',
        payload: {...action.payload, id: response.data.id}
    });

  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* confirmationSaga() {
  yield takeEvery('GET_REVIEW', getReview);
  yield takeEvery('POST_TEMPLATE', postTemplate);
}

export default confirmationSaga;
