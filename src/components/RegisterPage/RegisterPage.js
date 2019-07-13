import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

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
      <Container className="behindPaper" maxWidth='xs'>
        {this.props.store.errors.registrationMessage && (
          <Typography variant="h6"
            className="alert"
            role="alert"
          >
            {this.props.store.errors.registrationMessage}
          </Typography>
        )}
        <Paper elevation={15}>
        <Box m={1} p={3}>
          <Typography variant="h5" component="h3">Register User</Typography>
          <Grid container spacing={2}>
          <Grid item xs={12} md={12}>

              <TextField
                fullWidth={true}
                label="First Name"
                required={true}
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor('first_name')}
              />

              <TextField
                fullWidth={true}
                label="Last Name"
                required={true}
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />


              <TextField
                fullWidth={true}
                label="Email:"
                required={true}
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />


              <TextField
                fullWidth={true}
                label="Password:"
                required={true}
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />

            <div className="vr_2x">
                <TextField
                  fullWidth={true}
                  label="Password Confirmation:"
                  required={true}
                  type="password"
                  name="password_confirmation"
                  value={this.state.passwordConfirmation}
                  onChange={this.handleInputChangeFor('passwordConfirmation')}
                />
            </div>

          <p>{this.state.passwordError}</p>
            <Button variant="outlined" color="inherit" onClick={this.registerUser}>Register</Button>
            </Grid>
            </Grid>
        <center>
          <Button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </Button>
        </center>
        </Box>
        </Paper>
        </Container>
    );
  }
}

export default connect(mapStateToProps)(RegisterPage);

