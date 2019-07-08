import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminResources from '../AdminResources/AdminResources';
import AdminAppointment from '../AdminAppointment/AdminAppointment';

class AdminDashboardPage extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <AdminAppointment />
        <AdminResources />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminDashboardPage);
