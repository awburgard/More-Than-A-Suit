import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class InputField extends Component {
    // changeInfo = () =>{

    // }

    render(){
        return(
            <div>
                First Name: <input value = {this.props.info.first_name}></input><br/>
                Last Name: <input value= {this.props.info.last_name}></input><br/>
                Zip Code: <input value={this.props.info.zip}></input> <br/>
                Phone Number: <input value={this.props.info.phone}></input> <br/>
                Email: <input value={this.props.info.email}></input> <br/>
                Height: Feet <input value={this.props.info.height_feet}></input>  &nbsp; Inches <input value={this.props.info.height_inches}></input><br/>
                Weight: <input value={this.props.info.weight}></input> <br/>
                Waist: <input value={this.props.info.waist}></input> <br/>
                Need: <input value={this.props.info.need}></input><br/>
                Appointment Type: <input value={this.props.info.appointment_type}></input> <br/>
                Appointment Date: <input value={this.props.info.appointment_date}></input> <br/>
                Appointment Time: <input value={this.props.info.time}></input> <br/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(InputField);
