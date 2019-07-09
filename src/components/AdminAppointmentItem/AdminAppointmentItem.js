import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import moment from "moment";

class AdminAppointmentItem extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.appointment.first_name} {this.props.appointment.last_name}</p>
        <p>Phone Number: {this.props.appointment.phone}</p>
        <p>Appointment: {this.props.appointment.appointment_type} {moment(this.props.appointment.appointment_date).format(`MMMM Do YYYY`)} {moment(this.props.appointment.appointment_time, 'HH:mm:ss').format(`h:mm a`)}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointmentItem);
