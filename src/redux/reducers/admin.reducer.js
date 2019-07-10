const appointmentAdmin = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_APPOINTMENT':
            return action.payload;
        default:
            return state;
    }
};

export default appointmentAdmin;