import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class RegisterPage extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    passwordError: null
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.first_name && this.state.last_name && this.state.email && this.state.password && this.state.passwordConfirmation === this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          passwordConfirmation: this.state.passwordConfirmation
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    if (propertyName === 'passwordConfirmation' && this.state[propertyName] !== this.state.password) {
      this.setState({
        passwordError: 'Passwords do not match!'
      })
    } else {
      this.setState({
        passwordError: null,
      })
    }
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.store.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.store.errors.registrationMessage}
          </h2>
        )}
        <form className="loginPanel" onSubmit={this.registerUser}>
          <h1 className="loginPanel-hd">Register User</h1>

          <div className="loginPanel-fields">
            <label className="fieldSet" htmlFor="first_name">
              <span className="fieldSet-label">First Name:</span>
              <input
                className="fieldSet-input"
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor('first_name')}
              />
            </label>
            <label className="fieldSet" htmlFor="last_name">
              <span className="fieldSet-label">Last Name:</span>
              <input
                className="fieldSet-input"
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />
            </label>
            <label className="fieldSet" htmlFor="email">
              <span className="fieldSet-label">email:</span>
              <input
                className="fieldSet-input"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
            <label className="fieldSet" htmlFor="password">
              <span className="fieldSet-label">Password:</span>
              <input
                className="fieldSet-input"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
            <label className="fieldSet" htmlFor="passwordConfirmation">
              <span className="fieldSet-label">Password Confirmation:</span>
              <input
                className="fieldSet-input"
                type="password"
                name="password"
                value={this.state.passwordConfirmation}
                onChange={this.handleInputChangeFor('passwordConfirmation')}
              />
            </label>
          </div>
          <p>{this.state.passwordError}</p>
          <div className="loginPanel-action">
            <input
              className="btn btn_sizeMin"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RegisterPage);

