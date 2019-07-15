import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import CalendarTimePicker from '../CalendarTimePicker/CalendarTimePicker';
import Modal from '@material-ui/core/Modal';
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography, Box } from '@material-ui/core';

import './AppointmentCalendar.css';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = (theme: Theme) => createStyles({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
        ...getModalStyle()
    },
});

class AppointmentCalendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTime: new Date(),
            isModalOpen: false,
            selectedDate: '',
        };
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_APPOINTMENT'
        })
    }

    handleDateClick = (info) => {
        this.setState({
            isModalOpen: true,
            selectedDate: info.dateStr
        })
    }

    handleClose = () => {
        this.setState({
            isModalOpen: false
        })
    }

    handleTimeChange = (time) => {
        this.setState({
            selectedTime: time
        })
    }

    handleTimeConfirmation = () => {
        this.handleClose();
        this.props.dispatch({
            type: 'UPDATE_APPOINTMENT_INFO',
            payload: {
                appointment_type: this.props.appointmentType,
                appointment_date: this.state.selectedDate,
                appointment_time: this.state.selectedTime,
                id: this.props.store.setReview.id
            }
        })
        this.props.nextStep();
    }

    render() {
        return (
            <div>
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    events={this.props.store.appointment}
                    dateClick={this.handleDateClick}
                />
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.isModalOpen}
                            onClose={this.handleClose}
                        >

                            <div className={this.props.classes.paper}>
                                <Typography gutterBottom={true}>You Selected {this.state.selectedDate}</Typography>
                                <CalendarTimePicker selectedTime={this.state.selectedTime} handleTimeChange={this.handleTimeChange} />
                                <Box marginTop={1} paddingLeft={-1}>
                                <Button color="primary" variant="contained" onClick={this.handleTimeConfirmation}>Confirm Time</Button>
                                </Box>
                            </div>
                        </Modal>
            </div >
        )
    }
}

export default connect(mapStateToProps)(withStyles(styles)(AppointmentCalendar));