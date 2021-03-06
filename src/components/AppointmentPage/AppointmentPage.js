import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AppointmentCalendar from '../AppointmentCalendar/AppointmentCalendar';
import {
    Paper,
    Box,
    Radio,
    Typography,
    Container
} from '@material-ui/core/';
import './AppointmentPage.css';

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
            <Container maxWidth='md' className='behindPaper'>
                <Paper elevation={5}>
                <Box m={1} p={1}>
                <Typography variant='h5' gutterBottom={true}>Set Your Appointment</Typography>
                <form onSubmit={this.handleSubmit}>
                            <label className="textShift">
                                <Radio 
                                    type="radio"
                                    value="Phone Call"
                                    checked={this.state.appointmentType === "Phone Call"}
                                    onChange={this.handleChange}
                                />
                                Phone Call
                            </label>
                            <br />
                            <label className="textShift">
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
            </Container>
        )
    }
};

export default connect(mapStateToProps)(AppointmentPage);