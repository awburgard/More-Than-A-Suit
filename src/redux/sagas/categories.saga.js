import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCategories(action) {
    try {
        const getResponse = yield axios.get(`/api/need/`);
        console.log('THIS IS THE GET RESPONSE:', getResponse)
        yield put({
            type: 'SET_CATEGORIES',
            payload: getResponse.data
        });
    } catch (err) {
        console.log('error in measurement saga:', err);
    }
}

function* categoriesSaga() {
    yield takeLatest('GET_CATEGORIES', getCategories);
}

export default categoriesSaga;