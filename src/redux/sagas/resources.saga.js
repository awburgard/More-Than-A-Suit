import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on 'GET_TEMPLATE' actions
function* getResources(action) {
  console.log(action)
  try {
    // call to get API route and store the response
    const getResponse = yield axios.get(`/api/resources/`, action.payload);
    // after successful get API call use put to set the data
    yield put({
        type: 'SET_RESOURCES',
        payload: getResponse.data,
    });
  } catch (error) {
    console.log('Error with getting resources:', error);
  }
}

function* getNeedResources(action) {
  console.log(action)
  try {
    // call to get API route and store the response
    const getResponse = yield axios.get(`/api/resources/${action.payload}`, action.payload);
    // after successful get API call use put to set the data
    yield put({
        type: 'SET_NEED_RESOURCES',
        payload: getResponse.data,
    });
  } catch (error) {
    console.log('Error with getting need:', error);
  }
}

function* resourcesSaga() {
    yield takeEvery('GET_RESOURCES', getResources);
    yield takeEvery('GET_NEED_RESOURCES', getNeedResources);

  }

  export default resourcesSaga;