import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminAppointmentItem from '../AdminAppointmentItem/AdminAppointmentItem';
import {Paper, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'

class AdminAppointmentList extends Component {
  componentDidMount(){
    this.props.dispatch({
      type: 'GET_ADMIN_APPOINTMENT'
    })
  }
  render() {
    const appointmentElement = this.props.appointments.map((appointment, index)=>{
      return <AdminAppointmentItem appointment={appointment} index={index} key={index} archived={this.props.archived}/>
    })
    return (
         <Paper elevation={5}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" component="th" scope="row">Name</TableCell>
                <TableCell align="left" component="th" scope="row">Phone Number</TableCell>
                <TableCell align="left" component="th" scope="row">Zip Code</TableCell>
                <TableCell align="left" component="th" scope="row">Height</TableCell>
                <TableCell align="left" component="th" scope="row">Weight</TableCell>
                <TableCell align="left" component="th" scope="row">Waist</TableCell>
                <TableCell align="left" component="th" scope="row">Need</TableCell>
                <TableCell align="left" component="th" scope="row">Appointment Type</TableCell>
                <TableCell align="left" component="th" scope="row">Appointment Date</TableCell>
                <TableCell align="left" component="th" scope="row">Appointment Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
         {appointmentElement}
         </TableBody>
         </Table>
         </Paper>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointmentList);
