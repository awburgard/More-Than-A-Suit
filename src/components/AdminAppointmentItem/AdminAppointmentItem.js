import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import moment from "moment";
import {Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

class AdminAppointmentItem extends Component {
  render() {
    return (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Height</TableCell>
                <TableCell align="left">Weight</TableCell>
                <TableCell align="left">Waist</TableCell>
                <TableCell align="left">Need</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Appointment Type</TableCell>
                <TableCell align="right">Appointment Date</TableCell>
                <TableCell align="right">Appointment Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={this.props.key}>
                <TableCell align="left">{this.props.appointment.first_name} {this.props.appointment.last_name}</TableCell>
                <TableCell align="right">{this.props.appointment.phone}</TableCell>
                <TableCell align="right">{this.props.appointment.height_feet} {this.props.appointment.height_inches}</TableCell>
                <TableCell align="right">{this.props.appointment.weight}</TableCell>
                <TableCell align="right">{this.props.appointment.waist}</TableCell>
                <TableCell align="right">{this.props.appointment.need}</TableCell>
                <TableCell align="right">{this.props.appointment.appointment_type}</TableCell>
                <TableCell align="right">{moment(this.props.appointment.appointment_date).format(`MMMM Do YYYY`)}</TableCell>
                <TableCell align="right">{moment(this.props.appointment.appointment_time, 'HH:mm:ss').format(`h:mm a`)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointmentItem);
