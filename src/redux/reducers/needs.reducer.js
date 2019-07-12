const needs = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEED_RESOURCES':
            return action.payload;
        default:
            return state;
    }
};

export default needs;