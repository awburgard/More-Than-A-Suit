import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
// import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
 import MuiPhoneInput from '@material-ui/core/TextField';


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

    // validate = () => {
    //     if (!this.state.triedSubmit) return;

    //     let isValid = false;
    //     let first_name_err = false;
    //     let last_name_err = false;
    //     let zip_err = false;
    //     let phone_err = false;

    //     if (!this.state.gentInfo.first_name) {
    //         first_name_err = true;
    //     }

    //     if (!this.state.gentInfo.last_name) {
    //         last_name_err = true;
    //     }

    //     if (!this.state.gentInfo.zip) {
    //         zip_err = true;
    //     }

    //     if (!this.state.gentInfo.phone) {
    //         phone_err = true;
    //     }

    //     if (this.state.gentInfo.first_name && this.state.gentInfo.last_name && this.state.gentInfo.zip && this.state.gentInfo.phone) {
    //         isValid = true;
    //     }

    //     this.setState({
    //         first_name_err : first_name_err,
    //         last_name_err : last_name_err,
    //         zip_err : zip_err,
    //         phone_err : phone_err,
    //         formValid: isValid
    //     });
    // };

    // handleClick = event => {
    //     event.preventDefault();
    //     // this.setState({
    //     //     triedSubmit: true
    //     // }, async () => {
    //     //     await this.validate();
    //     //     if (this.state.formValid) {
    //             this.props.dispatch({ type: 'SET_CONTACT_INFO', payload: this.state.gentInfo });
    //                 this.setState({
    //                     gentInfo: {
    //                         first_name: '',
    //                         last_name: '',
    //                         zip: '',
    //                         phone: '',
    //                         email: ''
    //                     }
    //                 });
    //             this.props.history.push('/measurements');
    // }
    //     })
    // }

    // onFormChange = (dataname) => event => {
    //     this.setState({
    //         gentInfo: {
    //             ...this.state.gentInfo,
    //             [dataname]: event.target.value
    //         }
    //     }, () => {
    //         this.validate();
    //     });
    // }

    // onFormChange = (dataname) => event => {
    //     this.setState({
    //         gentInfo: {
    //             ...this.state.gentInfo,
    //             [dataname] : event.target.value
    //         }
    //     });
    // }


    render() {
        const infoInputs = (
            <form >
                <span>Contact Info:</span><br />
                <TextField
                    required="true"
                    id="standard-required"
                    label="First Name"
                    margin="normal"
                /> <br />
                <TextField
                    required="true"
                    id="standard-required"
                    label="Last Name"
                    margin="normal"
                /> <br />
                <TextField
                    required="true"
                    id="standard-required"
                    label="Zip"
                    margin="normal"
                /> <br />
                {/* <NumberFormat
                    required="true"
                    format="(###) ###-####"
                    customInput={TextField}
                    value={this.state.gentInfo.phone}
                    mask="_"
                    // onChange={this.onFormChange('phone')}
                    placeholder="Cell Phone Number"
                /> <br /> */}
                {/* <TextField
                    type="tel"
                    required="true"
                    id="standard-required"
                    label="Cell Phone Number"
                    margin="normal"
                /> <br /> */}
                <MuiPhoneInput
                    defaultCounty='us'
                    onlyCountries='us'
                    autoFormat='true'
                /> <br />
                <TextField
                    id="standard-required"
                    label="E-mail"
                    margin="normal"
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