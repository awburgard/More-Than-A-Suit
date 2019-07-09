import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import contactInfoSaga from './contactInfo.saga';
import confirmationSaga from './confirmation.saga';
import resourcesSaga from './resources.saga';
import measurementsSaga from './measurements.saga';
import twilioSaga from './twilio.saga';
<<<<<<< HEAD
import categoriesSaga from './categories.saga';
import appointmentSaga from './appointment.saga';
=======
import needsSaga from './needs.saga';

>>>>>>> develop
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    contactInfoSaga(),
    confirmationSaga(),
    resourcesSaga(),
    measurementsSaga(),
    twilioSaga(),
<<<<<<< HEAD
    categoriesSaga(),
    appointmentSaga(),
=======
    needsSaga()
>>>>>>> develop
  ]);
}
