import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import moment from 'moment';
import './ConfirmationPageInfo.css';
// Material UI
import Typography from '@material-ui/core/Typography';

class ConfirmationPageInfo extends Component {
    render() {
        return (
            <div className="vr vr_2x">
                <Typography variant="h5">Confirmation</Typography> <br />
                    <div className="vr vr_2x">
                    <div className="underline">
                        <Typography variant="h6" component="h5">Contact Info</Typography>
                        </div>
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
                    </div>
                    <div className="vr vr_2x">
                    <div className="underline">
                        <Typography variant="h6" color="primary">Measurements</Typography>
                    </div>
                            <Typography component="h6" color="secondary" display="inline">Height: </Typography>
                                <Typography component="p" color="secondary" display="inline">
                                    <Typography component="p" color="primary" display="inline">{this.props.info.height_feet} </Typography>ft. &nbsp;
                                    <Typography component="p" color="primary" display="inline">{this.props.info.height_inches} </Typography>in.
                                </Typography> <br />
                            <Typography component="h6" color="secondary" display="inline">Weight: </Typography>
                                <Typography component="p" color="secondary" display="inline">
                                    <Typography component="p" color="primary" display="inline">{this.props.info.weight} </Typography>lbs.
                                </Typography> <br />
                            <Typography component="h6" color="secondary" display="inline">Waist: </Typography>
                                <Typography component="p" color="secondary" display="inline">
                                    <Typography component="p" color="primary" display="inline">{this.props.info.waist} </Typography>in.
                                </Typography> <br />
                    </div>
                    <div className="vr vr_2x">
                    <div className="underline">
                        <Typography variant="h6" color="primary">Occasion</Typography>
                    </div>
                            <Typography component="p" color="primary">{this.props.info.need}</Typography>
                    </div>
                <div className="underline">
                    <Typography variant="h6" color="primary">Appointment</Typography>
                </div>
                    <Typography component="h6" color="secondary" display="inline">Type: </Typography>
                        <Typography component="p" color="primary" display="inline">{this.props.info.appointment_type}</Typography> <br />
                    <Typography component="h6" color="secondary" display="inline">Date: </Typography>
                    <Typography component="p" color="primary" display="inline">
                                {moment(this.props.info.appointment_date).format(`MMMM Do YYYY`)}</Typography> <br />
                    <Typography component="h6" color="secondary" display="inline">Time: </Typography>
                    <Typography component="p" color="primary" display="inline">
                            {moment(this.props.info.appointment_time, 'h:mm:ss a').format(`h:mm a`)}</Typography> <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ConfirmationPageInfo);

