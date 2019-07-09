import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import moment from "moment";

class AdminAppointmentItem extends Component {
  render() {
    return (
      <div>
        Name: {this.props.appointment.first_name} {this.props.appointment.last_name} <br/>
        Appointment: {this.props.appointment.appointment_type} {moment(this.props.appointment.appointment_date).format(`MMMM Do YYYY`)} {moment(this.props.appointment.appointment_time, 'HH:mm:ss').format(`h:mm a`)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointmentItem);
