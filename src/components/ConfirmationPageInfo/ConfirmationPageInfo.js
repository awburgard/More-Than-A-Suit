import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

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
                Appointment Date: {this.props.info.appointment_date} <br />
                Appointment Time: {this.props.info.time} <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ConfirmationPageInfo);

