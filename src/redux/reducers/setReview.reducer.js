const setReview = (state = {}, action) => {
    switch (action.type) {
      case 'SET_REVIEW':
        return {...state, ...action.payload};
      default:
        return state;
    }
  };

  export default setReview;