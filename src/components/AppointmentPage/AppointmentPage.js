import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AppointmentCalendar from '../AppointmentCalendar/AppointmentCalendar';

class AppointmentPage extends Component {
    constructor() {
        super();

        this.state = {
            appointmentType: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            appointmentType: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        alert(`You chose the ${this.state.appointmentType} appointment.`);
        this.props.dispatch({
            type: 'UPDATE_APPOINTMENT_TYPE'
        })
    }

    render() {
        return (
            <div>
                <h2>Set Up Your Appointment</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>Select an appointment type:</p>
                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="Phone Call"
                                    checked={this.state.appointmentType === "Phone Call"}
                                    onChange={this.handleChange}
                                />
                                Phone Call
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="In Person"
                                    checked={this.state.appointmentType === "In Person"}
                                    onChange={this.handleChange}
                                />
                                In Person
                            </label>
                        </li>
                    </ul>
                    <button 
                    type="submit">
                    Select Type
                    </button>
                </form>
                <h2>Choose Appointment Date/Time</h2>
                <AppointmentCalendar />
            </div>
        )
    }
};

export default connect(mapStateToProps)(AppointmentPage);