import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getNeedResources(action) {
  console.log(action)
  try {
    // call to get API route and store the response
    console.log('Nerp: ', action.payload);
    const getResponse = yield axios.get(`/api/resources/${action.payload.categories_name}`);
    console.log('Yerp: ', getResponse);
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
    yield takeEvery('GET_NEED_RESOURCES', getNeedResources);

  }

  export default resourcesSaga;