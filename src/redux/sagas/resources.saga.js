import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getNeedResources(action) {
  try {
    const getResponse = yield axios.get(`/api/resources/${action.payload.categories_name}`);
    yield put({
      type: 'SET_NEED_RESOURCES',
      payload: getResponse.data,
    });
  } catch (error) {
    console.log('Error with getting need:', error);
  }
}

function* getAllResources(action) {
  try {
    //change route to /api/admin/dashboard
    const getResponse = yield axios.get(`/api/resources`);
    yield put({
      type: 'SET_ALL_RESOURCES',
      payload: getResponse.data,
    });
  } catch (error) {
    console.log('Error with getting need:', error);
  }
}

function* updateResource(action) {
  try {
    yield axios.put(`/api/resources/${action.payload.id}`, action.payload);
    yield put({
      type: 'GET_ALL_RESOURCES',
      payload: action.payload
    });
  } catch (error) {
    console.log('Error with getting need:', error);
  }
}

function* deleteResource(action) {
  try {
    yield axios.delete(`/api/resources/${action.payload.id}`, action.payload);
    yield put({
      type: 'GET_ALL_RESOURCES',
      payload: action.payload
    });
  } catch (error) {
    console.log('Error with getting need:', error);
  }
}

function* addResource(action) {
  console.log(action.payload)
  try {
    //TO DO: CHANGE ROUTE TO ADMIN
    yield axios.post('/api/resources', action.payload);
    yield put({
      type: 'GET_ALL_RESOURCES',
      payload: action.payload,
    });
  } catch (err) {
    console.log('error HELP:', err);
  }
}

function* resourcesSaga() {
  yield takeEvery('GET_NEED_RESOURCES', getNeedResources);
  yield takeEvery('GET_ALL_RESOURCES', getAllResources);
  yield takeEvery('PUT_RESOURCE', updateResource);
  yield takeEvery('DELETE_RESOURCE', deleteResource);
  yield takeEvery('ADD_RESOURCE', addResource);

}

export default resourcesSaga;