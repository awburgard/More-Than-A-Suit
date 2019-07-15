import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import './ContactInfo.css';
import ReactPhoneInput from 'react-phone-input-mui';
//Material UI
import {
    TextField,
    Paper,
    Typography,
    Button,
    Box,
    Grid,
    Container
} from '@material-ui/core/';

class ContactInfo extends Component {
    state = {
        gentInfo: {
            first_name: '',
            last_name: '',
            zip: '',
            phone: '',
            email: '',
        }
    }

    handleClick = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_CONTACT_INFO',
            payload: this.state.gentInfo
        });
        this.setState({
            gentInfo: {
                first_name: '',
                last_name: '',
                zip: '',
                phone: '',
                email: ''
            }
        });
        this.props.history.push('/measurements');
    }

    onFormChange = (dataname) => (event, something) => {
        let finalValue = event;
        if (event.target) {
            finalValue = event.target.value
        }
        this.setState({
            gentInfo: {
                ...this.state.gentInfo,
                [dataname]: finalValue
            }
        });
    }

    render() {
        const infoInputs = (
            <Container className="behindPaper" maxWidth='xs'>
                <Paper elevation={5}>
                <Box m={3} p={2}>
                <form onSubmit={this.handleClick}>
                    <Typography variant="h5" component="h3">
                            Contact Info
                    </Typography>
                    <Grid item xs={12} md={12}>
                    <TextField
                        required={true}
                        id="standard-required"
                        label="First Name"
                        value={this.state.gentInfo.first_name}
                        onChange={this.onFormChange('first_name')}
                        autoFocus={true}
                        margin="normal"
                        fullWidth={true}
                    /> <br />
                    <TextField
                        required={true}
                        id="standard-required"
                        label="Last Name"
                        value={this.state.gentInfo.last_name}
                        onChange={this.onFormChange('last_name')}
                        margin="normal"
                        fullWidth={true}
                    /> <br />
                    <TextField
                        required={true}
                        id="standard-required"
                        label="Zip"
                        value={this.state.gentInfo.zip}
                        onChange={this.onFormChange('zip')}
                        margin="normal"
                        fullWidth={true}
                    /> <br />
                    <ReactPhoneInput
                        containerClass="phone-margin"
                        onlyCountries={['us']}
                        value={this.state.gentInfo.phone}
                        onChange={this.onFormChange('phone')}
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
                        id="standard-required"
                        label="E-mail"
                        value={this.state.gentInfo.email}
                        onChange={this.onFormChange('email')}
                        margin="normal"
                        fullWidth={true}
                    /> <br />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >   Next
                    </Button>
                </Grid>
                </form>
                </Box>
                </Paper>
            </Container>
        )

        return (
            <div>{infoInputs}</div>
        )
    }
};

export default connect(mapStateToProps)(ContactInfo);