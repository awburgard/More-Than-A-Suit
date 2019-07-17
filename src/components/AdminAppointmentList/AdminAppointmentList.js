import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminAppointmentItem from '../AdminAppointmentItem/AdminAppointmentItem';
import { Grid, Paper, Typography } from '@material-ui/core'

class AdminAppointmentList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ADMIN_APPOINTMENT'
    })
  }
  render() {
    const appointmentElement = this.props.appointments.map((appointment, index) => {
      return <AdminAppointmentItem appointment={appointment} index={index} key={index} archived={this.props.archived} />
    })
    return (
      <Paper className="gridTable" elevation={5}>
        <div className="gridTable-row gridTable-row_smHide">
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Typography>Name</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography>Phone Number</Typography>
            </Grid>
            <Grid item md={1}>
              <Typography>Zip Code</Typography>
            </Grid>
            <Grid item md={1}>
              <Typography>Height</Typography>
            </Grid>
            <Grid item md={1}>
              <Typography>Weight</Typography>
            </Grid>
            <Grid item md={1}>
              <Typography>Waist</Typography>
            </Grid>
            <Grid item md={1}>
              <Typography>Need</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography>Appointment</Typography>
            </Grid>
          </Grid>
        </div>
        {appointmentElement}
      </Paper>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointmentList);
