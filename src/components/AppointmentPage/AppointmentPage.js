import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AppointmentCalendar from '../AppointmentCalendar/AppointmentCalendar';
import {
    TextField,
    Paper,
    Typography,
    Button,
    Box,
    Grid,
    Container,
    Radio
} from '@material-ui/core/';

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
    //TO DO: DELETE LATER
    goToConfirmation = (event) => {
        this.props.history.push('/confirmation');
    }

    render() {
        return (
            <div>
                <Paper elevation={15}>
                <Box m={1} p={1}>
                <h2>Set Up Your Appointment</h2>
                <form onSubmit={this.handleSubmit}>
                            <label>
                                <Radio
                                    type="radio"
                                    value="Phone Call"
                                    checked={this.state.appointmentType === "Phone Call"}
                                    onChange={this.handleChange}
                                />
                                Phone Call
                            </label>
                            <label>
                                <Radio
                                    type="radio"
                                    value="In Person"
                                    checked={this.state.appointmentType === "In Person"}
                                    onChange={this.handleChange}
                                />
                                In Person
                            </label>
                </form>
                <AppointmentCalendar appointmentType={this.state.appointmentType} nextStep={this.goToConfirmation}/>
                </Box>
                </Paper>
            </div>
        )
    }
};

export default connect(mapStateToProps)(AppointmentPage);