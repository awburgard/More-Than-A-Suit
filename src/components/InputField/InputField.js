import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ReactPhoneInput from 'react-phone-input-mui';
// Material UI
import {
    TextField,
    InputAdornment,
    Typography,
    Button,
    Grid,
    Radio,
    RadioGroup
} from '@material-ui/core/';

const NEED_TYPES = [
    'Job',
    'Funeral',
    'Court',
    'Other',
];

class InputField extends Component {
    constructor(props) {
        super(props);
        let needsType = props.info.need;
        let otherText = null;

        if (NEED_TYPES.indexOf(needsType) === -1) {
            needsType = NEED_TYPES[3];
            otherText = props.info.need;
        }

        this.state = {
            first_name: props.info.first_name,
            last_name: props.info.last_name,
            zip: props.info.zip,
            phone: props.info.phone,
            email: props.info.email,
            height_feet: props.info.height_feet,
            height_inches: props.info.height_inches,
            weight: props.info.weight,
            waist: props.info.waist,
            needsType,
            otherText,
            appointment_date: props.info.appointment_date,
            appointment_type: props.info.appointment_type,
            appointment_time: props.info.appointment_time,
        }
    }


    saveInfo = () => {
        const need = this.state.needsType;

        if (need === 'Other') {
            need = this.state.otherText;
        }
        this.props.dispatch({
            type: 'PUT_REVIEW',
            payload: {
                id: this.props.info.id,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                zip: this.state.zip,
                phone: this.state.phone,
                email: this.state.email,
                height_feet: this.state.height_feet,
                height_inches: this.state.height_inches,
                weight: this.state.weight,
                waist: this.state.waist,
                need: need,
                appointment_date: this.state.appointment_date,
                appointment_type: this.state.appointment_type,
                appointment_time: this.state.appointment_time
            }
        })
        this.props.toggleEdit();
    }


    handleInputChangeFor = propertyName => (event) => {
        let finalValue = event;
        if (event.target) {
            finalValue = event.target.value
        }
        this.setState({
            [propertyName]: finalValue,
        });
    };

    render() {
        let otherField = (
            <div className="vr_2x">
                <TextField type="text" id="other" value={this.state.otherText} name="other" placeholder="other need" onChange={this.handleInputChangeFor('otherText')} />
            </div>
        );

        if (this.state.needsType !== 'Other') {
            otherField = null;
        }

        return (
            <form onSubmit={this.saveInfo}>
            <Typography variant="h5" component="h3">
                    Edit
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <TextField
                    required={true}
                    label="First Name"
                    value={this.state.first_name}
                    onChange={this.handleInputChangeFor('first_name')}
                    autoFocus={true}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    required={true}
                    label="Last Name"
                    value={this.state.last_name}
                    onChange={this.handleInputChangeFor('last_name')}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    required={true}
                    label="Zip"
                    value={this.state.zip}
                    onChange={this.handleInputChangeFor('zip')}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <ReactPhoneInput
                    onlyCountries={['us']}
                    value={this.state.phone}
                    onChange={this.handleInputChangeFor('phone')}
                    component={TextField}
                    defaultCountry={'us'}
                    disableCountryCode={true}
                    disableDropdown={true}
                    disableSearchIcon={true}
                    fullWidth={true}
                    inputExtraProps={{
                        label: 'Phone Number',
                        required: true,
                    }}
                /> <br />
                <TextField
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleInputChangeFor('email')}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                </Grid>
                <Grid item xs={6} md={6}>
                <TextField
                    label="Height"
                    value={this.state.height_feet}
                    onChange={this.handleInputChangeFor('height_feet')}
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
                    value={this.state.height_inches}
                    onChange={this.handleInputChangeFor('height_inches')}
                    margin="normal"
                    fullWidth={true}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">in</InputAdornment>,
                    }}
                />
                </Grid> <br />
                <Grid item xs={12} md={12}>
                <TextField
                    label="Weight"
                    value={this.state.weight}
                    onChange={this.handleInputChangeFor('weight')}
                    margin="normal"
                    fullWidth={true}
                /> <br />
                <TextField
                    label="Waist"
                    value={this.state.waist}
                    onChange={this.handleInputChangeFor('waist')}
                    margin="normal"
                    fullWidth={true}
                /> <br />
            <Typography variant="h6" component="h4">
                Occasion
            </Typography>
                <RadioGroup>
                <label>
                    <Radio
                        type="radio"
                        value="Job"
                        checked={this.state.needsType === "Job"}
                        onChange={this.handleInputChangeFor('needsType')}
                    />
                    Job
                </label>
                <label>
                    <Radio
                        type="radio"
                        value="Court"
                        checked={this.state.needsType === "Court"}
                        onChange={this.handleInputChangeFor('needsType')}
                        control={<Radio color="primary" />}
                    />
                    Court
                </label>
                <label>
                    <Radio
                        type="radio"
                        value="Funeral"
                        checked={this.state.needsType === "Funeral"}
                        onChange={this.handleInputChangeFor('needsType')}
                        control={<Radio color="primary" />}
                    />
                    Funeral
                </label>
                <label>
                    <Radio
                        type="radio"
                        value="Other"
                        checked={this.state.needsType === "Other"}
                        onChange={this.handleInputChangeFor('needsType')}
                        control={<Radio color="primary" />}
                    />
                    Other
                </label>
                    {otherField}
                </RadioGroup>


                {/* <AppointmentPage /> */}
                {/* TO DO: This will be replaced by the appointment page component once google API is figured out */}
                {/* Appointment Type: <input value={this.state.appointment_type} onChange={this.handleInputChangeFor('appointment_type')}></input> <br />
                Appointment Date: <input value={moment(this.state.appointment_date).format(`MMMM Do YYYY`)} onChange={this.handleInputChangeFor('appointment_date')}></input> <br />
                Appointment Time: <input value={moment(this.state.appointment_time, 'HH:mm:ss').format(`h:mm a`)} onChange={this.handleInputChangeFor('appointment_time')}></input> <br /> */}
                {/* Your appointment has already been set. To change your appointment please call... */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >   Save
                </Button>
                </Grid>
                </Grid>
            </form>
        )
    }
}

export default connect(mapStateToProps)(InputField);
