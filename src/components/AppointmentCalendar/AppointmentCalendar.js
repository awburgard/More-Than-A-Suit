import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import moment from "moment";



class AppointmentCalendar extends Component {

    handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

    render() {
        return (
            <div>
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    events={[]}
                    dateClick={this.handleDateClick} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(AppointmentCalendar);