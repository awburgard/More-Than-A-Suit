const resources = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_RESOURCES':
            console.table(action.payload);
            return [...action.payload];
        default:
            return state;
    }
};

export default resources;