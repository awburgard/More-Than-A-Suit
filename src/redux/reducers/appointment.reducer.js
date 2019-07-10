function googleCalendarEventConverter(googleEvents) {
    const calendarEvents = googleEvents.map((gEvent) => {
        return {
            title: 'Unavailable',
            start: gEvent.start.dateTime,
            end: gEvent.end.dateTime
        }
    })
    return calendarEvents
}

const appointment = (state = {}, action) => {
    switch (action.type) {
        case 'SET_APPOINTMENT':
            return googleCalendarEventConverter(action.payload);
        default:
            return state;
    }
};

export default appointment;