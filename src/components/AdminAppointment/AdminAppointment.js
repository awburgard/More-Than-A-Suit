import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminAppointmentList from '../AdminAppointmentList/AdminAppointmentList';
import { Typography } from '@material-ui/core';

class AdminAppointment extends Component {
  render() {
    return (
      <div>
        <Typography align="center" variant="h5">{this.props.title}</Typography>
        <AdminAppointmentList appointments={this.props.appointments} archived={this.props.archived}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointment);
