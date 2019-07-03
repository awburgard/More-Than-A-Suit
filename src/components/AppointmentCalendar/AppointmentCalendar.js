import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid'
// import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import moment from "moment";



class AppointmentCalendar extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_APPOINTMENT'
        })
    }

    handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

    render() {
        return (
            <div>
                <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    events={this.props.store.appointment} 
                    dateClick={this.handleDateClick}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AppointmentCalendar);