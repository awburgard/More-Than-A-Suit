// put in stub data here!
const testUser = {
  first_name : 'Bob',
  last_name: 'Jones',
  zip: '55555',
  phone: '816-555-5555',
  email: 'test@gmail.com',
  height_feet: 6,
  height_inches: 1,
  weight: 180,
  waist: 32,
  need: 'Job',
  appointment_type: 'phone',
  appointment_date: 'July 1',
}

const setReview = (state = testUser, action) => {
    switch (action.type) {
      case 'SET_REVIEW':
        return action.payload;
      default:
        return state;
    }
  };

  export default setReview;