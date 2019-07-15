import React, { Component } from 'react';
import { connect } from 'react-redux';
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


import './Login.css';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.email && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.email,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <Container className="behindPaper" maxWidth='xs'>
         {this.props.store.errors.loginMessage && (
          <Typography variant="h6"
            className="alert"
            role="alert"
          >
            {this.props.store.errors.loginMessage}
          </Typography>
        )}
        <Paper elevation={15}>
        <Box m={1} p={3}>
          <div className="vr">
          <Typography variant="h5" component="h3">Login</Typography>
          </div>
          <Grid container spacing={2}>
          <Grid item xs={12} md={12}>

              <div className="vr_2x">
                <TextField
                  fullWidth={true}
                  label="email:"
                  required={true}
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInputChangeFor('email')}
                />
              </div>  
              <div className="vr_2x">
              <TextField
                fullWidth={true}
                label="password:"
                required={true}
                type="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
              </div>
            <Button variant="outlined" color="inherit" onClick={this.login}>Login</Button>
          </Grid>
          </Grid>

        <center>
          <Button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </Button>
        </center>
        </Box>
        </Paper>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
