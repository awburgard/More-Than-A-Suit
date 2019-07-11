import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import moment from "moment";
// Material UI
import {
    TextField,
    InputAdornment,
    Paper,
    Typography,
    Button,
    Box,
    Grid,
    Container
} from '@material-ui/core/';

class ConfirmationPageInfo extends Component {
    render() {
        return (
            <div>
                <TextField
                    disabled
                    label="First Name"
                    value={this.props.info.first_name}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    disabled
                    label="Last Name"
                    value={this.props.info.last_name}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    disabled
                    label="Zip"
                    value={this.props.info.zip}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    disabled
                    label="Phone"
                    value={this.props.info.phone}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    disabled
                    label="Email"
                    value={this.props.info.email}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                <TextField
                    label="Height"
                    value={this.props.info.height_feet}
                    margin="normal"
                    fullWidth={true}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                    }}
                />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                    label=" "
                    value={this.props.info.height_inches}
                    margin="normal"
                    fullWidth={true}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">in</InputAdornment>,
                    }}
                />
                </Grid> <br />
                </Grid>
                <TextField
                    disabled
                    label="Weight"
                    value={this.props.info.weight}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    disabled
                    label="Waist"
                    value={this.props.info.waist}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    disabled
                    label="Need"
                    value={this.props.info.need}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    disabled
                    label="Appointment Type"
                    value={this.props.info.appointment_type}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    disabled
                    label="Appointment Date"
                    value={moment(this.props.info.appointment_date).format(`MMMM Do YYYY`)}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    disabled
                    label="Appointment Time"
                    value={moment(this.props.info.appointment_time, 'HH:mm:ss').format(`h:mm a`)}
                    margin="normal"
                    fullWidth={true}
                /> <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ConfirmationPageInfo);

