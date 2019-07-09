import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import moment from "moment";
import CalendarTimePicker from '../CalendarTimePicker/CalendarTimePicker';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class AppointmentCalendar extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_APPOINTMENT'
        })
    }

    handleDateClick = () => {
        MySwal.fire({
           html: <CalendarTimePicker handleTimeChange={this.handleTimeChange}/>
        })
    }

    handleTimeChange = (time) => {
        this.setState({
            selectedTime: this.props.selectedTime
        })
    }

    render() {
        return (
            <div>
                <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    events={this.props.store.appointment} 
                    dateClick={this.handleDateClick}
                    />
            </div>
        )
    }
}

export default connect(mapStateToProps)(AppointmentCalendar);