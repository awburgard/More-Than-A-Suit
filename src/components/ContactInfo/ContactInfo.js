import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import TextField from '@material-ui/core/TextField';
import ReactPhoneInput from 'react-phone-input-mui';

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

    onFormChange = (dataname) => event => {
        this.setState({
            gentInfo: {
                ...this.state.gentInfo,
                [dataname]: event.target.value
            }
        });
    }

    render() {
        const infoInputs = (
            <form >
                <span>Contact Info:</span><br />
                <TextField
                    required={true}
                    id="standard-required"
                    label="First Name"
                    value={this.state.gentInfo.first_name}
                    onChange={this.onFormChange('first_name')}
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
                    onlyCountries={['us']}
                    value={this.state.gentInfo.phone}
                    onChange={this.onFormChange('phone')}
                    component={TextField}
                    defaultCountry={'us'}
                    disableDropdown={true}
                    inputExtraProps={{
                        label: 'Cell Phone',
                        required: true,
                        autoFocus: true
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
                <button type="submit">Next</button>
            </form>
        )

        return (
            <div>{infoInputs}</div>
        )
    }
};

export default connect(mapStateToProps)(ContactInfo);