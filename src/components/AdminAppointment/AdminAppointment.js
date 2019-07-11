import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminAppointmentList from '../AdminAppointmentList/AdminAppointmentList';
import { Typography,Box } from '@material-ui/core';

class AdminAppointment extends Component {
  render() {
    return (
      <Box marginBottom={2} marginTop={2} paddingTop={2} paddingBottom={2}>
        <Typography gutterBottom={true} align="center" variant="h5">{this.props.title}</Typography>
        <AdminAppointmentList appointments={this.props.appointments} archived={this.props.archived}/>
      </Box>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointment);
