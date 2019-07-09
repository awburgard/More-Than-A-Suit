import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminAppointmentList from '../AdminAppointmentList/AdminAppointmentList';

class AdminAppointment extends Component {
  render() {
    return (
      <div>
        <h2>Appointments</h2>
        <AdminAppointmentList />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointment);
