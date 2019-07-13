import moment from "moment";

const setReview = (state = {}, action) => {
  let time;
  if (action.payload && action.payload.appointment_time) {
    time = moment(action.payload.appointment_time).format('h:mm a')
  }
    switch (action.type) {
      case 'SET_REVIEW':
        return {...state, ...action.payload, appointment_time: time};
      default:
        return state;
    }
  };

  export default setReview;