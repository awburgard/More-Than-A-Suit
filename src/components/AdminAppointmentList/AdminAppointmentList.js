import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminAppointmentItem from '../AdminAppointmentItem/AdminAppointmentItem';

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
      <div>
         {appointmentElement}
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminAppointmentList);
