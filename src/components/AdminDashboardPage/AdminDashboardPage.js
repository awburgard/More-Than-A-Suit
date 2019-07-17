import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminResources from '../AdminResources/AdminResources';
import AdminAppointment from '../AdminAppointment/AdminAppointment';
import moment from 'moment';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import SaveAlt from '@material-ui/icons/SaveAlt';
import downloadCsv from 'download-csv';


class AdminDashboardPage extends Component {
  csvExport = () => {

      const columns = {
        id: 'id',
        first_name: 'first_name',
        last_name: 'last_name',
        zip: 'zip',
        phone: 'phone',
      };

    downloadCsv(this.props.store.appointmentAdmin, columns);
  }
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
      <Box p={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h4">Admin Dashboard</Typography>
          </Grid>
          <Grid item xs={4} className="showOnlyLg">
            <Typography component="div" align="right">
            <Button onClick={this.csvExport} color="primary" variant="outlined"><SaveAlt className="space-right"></SaveAlt>Export</Button>
            </Typography>
          </Grid>
        </Grid>
        <AdminAppointment title="Appointments" appointments={appointments} />
        <AdminResources />
        <AdminAppointment title="Archived Appointments" appointments={archivedAppointments} archived={true} />
      </Box>
    );
  }
}

export default connect(mapStateToProps)(AdminDashboardPage);
