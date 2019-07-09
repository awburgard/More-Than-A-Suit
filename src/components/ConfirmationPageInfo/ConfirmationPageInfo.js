import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import moment from "moment";

class ConfirmationPageInfo extends Component {
    render() {
        return (
            <div>
                First Name: {this.props.info.first_name} <br />
                Last Name: {this.props.info.last_name} <br />
                Zip Code: {this.props.info.zip} <br />
                Phone Number: {this.props.info.phone} <br />
                Email: {this.props.info.email} <br />
                Height: Feet {this.props.info.height_feet} &nbsp; Inches {this.props.info.height_inches} <br />
                Weight: {this.props.info.weight} <br />
                Waist: {this.props.info.waist} <br />
                Need: {this.props.info.need} <br />
                Appointment Type: {this.props.info.appointment_type} <br />
                Appointment Date: {moment(this.props.info.appointment_date).format(`MMMM Do YYYY`)} <br />
                Appointment Time: {moment(this.props.info.appointment_time, 'HH:mm:ss').format(`h:mm a`)} <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ConfirmationPageInfo);

