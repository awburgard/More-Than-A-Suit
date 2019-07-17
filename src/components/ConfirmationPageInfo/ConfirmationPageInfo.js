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
                <Typography variant="h5">Confirmation</Typography> <br />
                <Typography variant="h6">Contact Info</Typography>
                <Typography component="h6" color="secondary" display="inline">First Name: </Typography>
                    <Typography component="p" color="primary" display="inline">{this.props.info.first_name}</Typography> <br />
                <Typography component="h6" color="secondary" display="inline">Last Name: </Typography>
                    <Typography component="p" color="primary" display="inline">{this.props.info.last_name}</Typography> <br />
                <Typography component="h6" color="secondary" display="inline">Zip Code: </Typography>
                   <Typography component="p" color="primary" display="inline">{this.props.info.zip}</Typography> <br />
                <Typography component="h6" color="secondary" display="inline">Phone: </Typography>
                    <Typography component="p" color="primary" display="inline">{this.props.info.phone}</Typography> <br />
                <Typography component="h6" color="secondary" display="inline">Email: </Typography>
                    <Typography component="p" color="primary" display="inline">{this.props.info.email}</Typography> <br />
                <Typography variant="h6">Measurements</Typography>
                <Typography component="h6" color="secondary" display="inline">Height: </Typography>
                    <Typography component="p" color="secondary" display="inline">{this.props.info.height_feet} ft. &nbsp; 
                                                            {this.props.info.height_inches} in.  </Typography> <br />
                <Typography component="h6" color="secondary" display="inline">Weight: </Typography>
                    <Typography component="p" color="secondary" display="inline">
                        <Typography component="p" color="primary" display="inline">{this.props.info.weight} </Typography>lbs.
                    </Typography> <br />
                <Typography component="h6" color="secondary" display="inline">Waist: </Typography>
                    <Typography component="p" color="secondary" display="inline">
                        <Typography component="p" color="primary" display="inline">{this.props.info.waist} </Typography>in.
                    </Typography> <br />
                <Typography component="h6" color="secondary" display="inline">Need: </Typography>
                    <Typography component="p" color="primary" display="inline">{this.props.info.need}</Typography> <br />
                    <Typography variant="h6">Appointment</Typography>
                <Typography component="h6" color="secondary" display="inline">Type: </Typography>
                    <Typography component="p" color="primary" display="inline">{this.props.info.appointment_type}</Typography> <br />
                <Typography component="h6" color="secondary" display="inline">Date: </Typography>
                <Typography component="p" color="primary" display="inline">
                            {moment(this.props.info.appointment_date).format(`MMMM Do YYYY`)}</Typography> <br />
                <Typography component="h6" color="secondary" display="inline">Appointment Time: </Typography>
                <Typography component="p" color="primary" display="inline">
                        {moment(this.props.info.appointment_time, 'h:mm:ss a').format(`h:mm a`)}</Typography> <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ConfirmationPageInfo);

