import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import moment from 'moment'
// Material UI
import Typography from '@material-ui/core/Typography';

class ConfirmationPageInfo extends Component {
    render() {
        return (
            <div className="vr">
                <Typography variant="h5" >Confirmation</Typography> <br />
                <Typography variant="h6" >
                First Name: {this.props.info.first_name} <br />
                Last Name: {this.props.info.last_name} <br />
                Zip Code: {this.props.info.zip} <br />
                Phone Number: {this.props.info.phone} <br />
                Email: {this.props.info.email} <br />
                Height: {this.props.info.height_feet} ft.  &nbsp; {this.props.info.height_inches} in.  <br />
                Weight: {this.props.info.weight} lbs. <br />
                Waist: {this.props.info.waist} in. <br />
                Need: {this.props.info.need} <br />
                Appointment Type: {this.props.info.appointment_type} <br />
                Appointment Date: {moment(this.props.info.appointment_date).format(`MMMM Do YYYY`)} <br />
                Appointment Time: {moment(this.props.info.appointment_time, 'HH:mm:ss').format(`h:mm a`)} <br />
                </Typography>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ConfirmationPageInfo);

