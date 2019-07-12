import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import { cyan, grey } from '@material-ui/core/colors';






const Nav = (props) => {
  let loginLinkTo = '/login';

  if (props.store.user.id) {
    loginLinkTo = '/admin';
  }

  return (
    <div>
      <MuiThemeProvider theme={orangeTheme}>
        <AppBar position="static">
          <Toolbar>
            <MuiThemeProvider theme={theme}>
              <Link to="/">
                <MuiThemeProvider theme={theme}>
                  <Typography variant="h3" color="secondary">
                    MORE THAN A SUIT
                  </Typography>
                </MuiThemeProvider>
              </Link>
            </MuiThemeProvider>
            <div>
              <Link to={loginLinkTo}>
                {/* Show this link if they are logged in or not,
                but call this link 'Welcome' if they are logged in,
                and call this link 'Login / Register' if they are not */}
                {props.store.user.id ? 'Welcome' : 'Login / Register'}
             </Link>
                {/* Show the link to the info page and the logout button if the user is logged in */}
                {props.store.user.id && (
                <>
                  {/* '<></>' - this is short syntax for React.Fragment */}
                  <Link to="/info">
                      Info Page
                  </Link>
                  <LogOutButton/>
                </>
                )}
                {/* Always show this link since the about page is not protected */}
              <Link to="/about">
                      About
              </Link>
              </div>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
    </div>
  )
};

export default connect(mapStateToProps)(Nav);
