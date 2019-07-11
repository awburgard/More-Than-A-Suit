import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import moment from 'moment';

const MySwal = withReactContent(Swal);

class TwilioButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    testMethod = () => {
        MySwal.fire({
            title: <span>Thank you!</span>,
            html: <p>Look for a text message coming your way!</p>,
            footer: 'SuitsForHire',
            allowOutsideClick: false
        }).then(() => {
            this.props.history.push('/resources');
        });
    }

    sendText = () => {
        this.props.dispatch({
            type: 'POST_TWILIO',
            payload: {
                phoneNumber: this.props.info.phone,
                appointmentDate: this.props.info.appointment_date,
                appointmentTime: this.props.info.appointment_time
            }
        });
        this.testMethod();
    }

    postAppointmentToCalendar = () => {
        const startTime = this.props.store.setReview.appointment_date + ' ' + this.props.store.setReview.appointment_time
        console.log(startTime);
        const payload =  {
            summary: this.props.store.setReview.first_name + ' ' + this.props.store.setReview.last_name,
            description: this.props.store.setReview.appointment_type,
            start: {dateTime: moment(startTime, 'YYYY-MM-DD mm').format(),
                    timeZone: 'America/Chicago'},
            end: {dateTime: moment(startTime, 'YYYY-MM-DD mm').add(1, 'hours').format(),
                    timeZone: 'America/Chicago'},
        }
        console.log(payload);
        this.props.dispatch({
            type: 'POST_APPOINTMENT',
            payload,
        })
        this.sendText()
    }

    render() {
        return (
            <div>
                <button onClick={this.postAppointmentToCalendar}>Confirm</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TwilioButton);
