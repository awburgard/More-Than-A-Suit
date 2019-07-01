import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class ConfirmationPageItem extends Component {
    render() {
        return (
            <div>
                First Name: {this.props.info.first_name}
                Last Name: {this.props.info.last_name}
                Zip Code: {this.props.info.zip}
                Phone Number: {this.props.info.phone}
                Email: {this.props.info.email}
                Height: Feet {this.props.info.height_feet} Inches {this.props.info.height_inches}
                Weight: {this.props.info.weight}
                Waist: {this.props.info.waist}
                Need: {this.props.info.need}
                Appointment Type: {this.props.info.appointment_type}
                Appointment Date: {this.props.info.appointment_date}
                Appointment Time: {this.props.info.time}

            </div>
        );
    }
}

export default connect(mapStateToProps)(ConfirmationPageItem);
