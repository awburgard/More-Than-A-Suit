import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class TwilioButton extends Component {

    sendText = () => {
        this.props.dispatch({
            type: 'POST_TWILIO',
            payload: {
                phoneNumber: this.props.info.phone,
                appointmentDate: this.props.info.appointment_date,
            }
        })
    }

    render (){
        return (
            <div>
                <button onClick={this.sendText}>Confirm</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TwilioButton);
