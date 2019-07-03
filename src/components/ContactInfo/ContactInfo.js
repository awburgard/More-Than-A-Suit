import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import NumberFormat from 'react-number-format';

const initialState = {
    gentInfo: {
        first_name: '',
        last_name: '',
        zip: '',
        phone: '',
        email: '',
    },
    first_name_err: false,
    last_name_err: false,
    zip_err: false,
    phone_err: false,
    formValid: false,
    triedSubmit: false,
};

class ContactInfo extends Component {
    state = initialState;

    validate = () => {
        if (!this.state.triedSubmit) return;

        let isValid = false;
        let first_name_err = false;
        let last_name_err = false;
        let zip_err = false;
        let phone_err = false;

        if (!this.state.gentInfo.first_name) {
            first_name_err = true;
        }

        if (!this.state.gentInfo.last_name) {
            last_name_err = true;
        }

        if (!this.state.gentInfo.zip) {
            zip_err = true;
        }

        if (!this.state.gentInfo.phone) {
            phone_err = true;
        }

        if (this.state.gentInfo.first_name && this.state.gentInfo.last_name && this.state.gentInfo.zip && this.state.gentInfo.phone) {
            isValid = true;
        }

        this.setState({
            first_name_err : first_name_err,
            last_name_err : last_name_err,
            zip_err : zip_err,
            phone_err : phone_err,
            formValid: isValid
        });
    };

    handleClick = event => {
        event.preventDefault();
        this.setState({
            triedSubmit: true
        }, async () => {
            await this.validate();
            if (this.state.formValid) {
                this.props.dispatch({ type: 'POST_CONTACT_INFO', payload: this.state.gentInfo })
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
        })
    }

    onFormChange = (dataname) => event => {
        this.setState({
            gentInfo: {
                ...this.state.gentInfo,
                [dataname]: event.target.value
            }
        }, () => {
            this.validate();
        });
    }

    render() {
        const infoInputs = (
            <form onSubmit={this.handleClick}>
                <span>Contact Info:</span><br />
                <input type="text"
                    value={this.state.gentInfo.first_name}
                    onChange={this.onFormChange('first_name')}
                    placeholder="First Name"
                /> <br />

                {this.state.first_name_err && <div style={{ fontSize: 12, color: "red" }}><p>This field is required</p></div>}

                <input type="text"
                    value={this.state.gentInfo.last_name}
                    onChange={this.onFormChange('last_name')}
                    placeholder="Last Name"
                /> <br />

                {this.state.last_name_err && <div style={{ fontSize: 12, color: "red" }}><p>This field is required</p></div>}

                <input type="text"
                    value={this.state.gentInfo.zip}
                    onChange={this.onFormChange('zip')}
                    placeholder="Zip Code"
                /> <br />

                {this.state.zip_err && <div style={{ fontSize: 12, color: "red" }}><p>This field is required</p></div>}

                <NumberFormat
                    format="(###) ###-####"
                    value={this.state.gentInfo.phone}
                    mask="_"
                    onChange={this.onFormChange('phone')}
                    placeholder="Cell Phone Number"
                /> <br />

                {this.state.phone_err && <div style={{ fontSize: 12, color: "red" }}><p>This field is required</p></div>}

                <input type="text"
                    value={this.state.gentInfo.email}
                    onChange={this.onFormChange('email')}
                    placeholder="E-Mail"
                /><br />
                <button type="submit">Next</button>
            </form>
        )

        return (
            <div>{infoInputs}</div>
        )
    }
};

export default connect(mapStateToProps)(ContactInfo);