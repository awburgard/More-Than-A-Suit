import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

// A Custom Wrapper Component -- This will keep our code DRY.
// Responsible for watching redux state, and returning an appropriate component
// API for this component is the same as a regular route

// THIS IS NOT SECURITY! That must be done on the server
// A malicious user could change the code and see any view
// so your server-side route must implement real security
// by checking req.isAuthenticated for authentication
// and by checking req.user for authorization

const ProtectedRoute = (props) => {
  // Using destructuring, this takes ComponentToProtect from component
  // prop and grabs all other props to pass them along to Route
  const {
    // Alias prop 'component' as 'ComponentToProtect'
    // same as doing: const ComponentToProtect = props.component;
    component: ComponentToProtect,
    // Creates a variable with the name of object key and stores property value
    // in the new variable. This variable is for the state of the redux store.
    // same as doing: const store = props.store
    store,
    // If redirect is defined its value will be used to setup the Redirect to
    // route when a user is not logged in.
    redirect,
    // Used to capture other props and pass to the <Route> component. This is
    // capturing props like 'exact' and 'path'
    ...otherProps
  } = props;

  let ComponentToShow;
  // If the user is logged in and the protected route has a "redirect" prop set the
  // user will be redirected to that specific page defined in the redirect prop
  const shouldRedirect = (store.user.id && redirect);

  if (store.user.id) {
    // if the user is logged in (only logged in users have ids)
    // show the component that is protected
    ComponentToShow = ComponentToProtect;
  } else if (store.loginMode === 'login') {
    // if they are not logged in, check the loginMode on Redux State
    // if the mode is 'login', show the LoginPage
    ComponentToShow = LoginPage;
  } else {
    // the the user is not logged in and the mode is not 'login'
    // show the RegisterPage
    ComponentToShow = RegisterPage;
  }

  // We return a Route component that gets added to our list of routes
  return (
    <>
      {shouldRedirect ?
      <Redirect exact from={otherProps.path} to={redirect} /> :
      <Route
        // all props like 'exact' and 'path' that were passed in
        // are now passed along to the 'Route' Component
        {...otherProps}
        component={ComponentToShow}
      />
      }
    </>
  )
}

export default connect(mapStateToProps)(ProtectedRoute);
