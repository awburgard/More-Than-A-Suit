import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import moment from "moment";
import {  TableRow, TableCell } from '@material-ui/core';

class AdminAppointmentItem extends Component {
  render() {
    return (
            <TableRow>
              <TableCell align="left">{this.props.appointment.first_name} {this.props.appointment.last_name}</TableCell>
              <TableCell align="left">{this.props.appointment.phone}</TableCell>
              <TableCell align="left">{this.props.appointment.zip}</TableCell>
              <TableCell align="left">{this.props.appointment.height_feet}' {this.props.appointment.height_inches}"</TableCell>
              <TableCell align="left">{this.props.appointment.weight}</TableCell>
              <TableCell align="left">{this.props.appointment.waist}</TableCell>
              <TableCell align="left">{this.props.appointment.need}</TableCell>
              <TableCell align="left">{this.props.appointment.appointment_type}</TableCell>
              <TableCell align="left">{moment(this.props.appointment.appointment_date).format(`MMMM Do YYYY`)}</TableCell>
              <TableCell align="left">{moment(this.props.appointment.appointment_time, 'HH:mm:ss').format(`h:mm a`)}</TableCell>
            </TableRow>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointmentItem);
