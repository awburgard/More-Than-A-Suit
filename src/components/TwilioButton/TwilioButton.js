import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
            title: <h1>Thank you!</h1>,
            html: <p>Look for a text message coming your way</p>,
            footer: 'Suits for Hire',
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

    render() {
        return (
            <div>
                <button onClick={this.sendText}>Confirm</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TwilioButton);
