import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminResources from '../AdminResources/AdminResources';
import AdminAppointment from '../AdminAppointment/AdminAppointment';
import moment from 'moment';
import { Typography, Box } from '@material-ui/core'

class AdminDashboardPage extends Component {
  render() {
    let appointments = [];
    let archivedAppointments = [];
    for (let i = 0; i < this.props.store.appointmentAdmin.length; i++) {
      const indvAppt = this.props.store.appointmentAdmin[i];
      const currentDate = moment();
      if (moment(indvAppt.appointment_date).isAfter(currentDate)) {
        appointments.push(indvAppt)
      } else {
        archivedAppointments.push(indvAppt);
      }
    }
    return (
          <Box p={3}>
            <Typography variant="h5">Dashboard</Typography>
            <AdminAppointment title="Appointments" appointments={appointments} />
            <AdminResources />
            <AdminAppointment title="Archived Appointments" appointments={archivedAppointments} archived={true} />
          </Box>
    );
  }
}

export default connect(mapStateToProps)(AdminDashboardPage);
