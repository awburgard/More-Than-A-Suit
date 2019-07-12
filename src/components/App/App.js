import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import ContactInfo from '../ContactInfo/ContactInfo';
import AppointmentPage from '../AppointmentPage/AppointmentPage';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import './App.css';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import ResourcesPage from '../ResourcesPage/ResourcesPage';
import Measurements from '../Measurements/Measurements';
import NeedsPage from '../NeedsPage/NeedsPage';
import AdminDashboardPage from '../AdminDashboardPage/AdminDashboardPage';
import LandingPage from '../LandingPage/LandingPage';




class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        {/* element with .site is in index.html */}
        <div className="site-hd">
          <Nav />
        </div>

        <div className="site-bd">
          <div className="container">
            <Switch>
              {/* A splash page is usually an informational page that talks
              to the purpose of the application to the user to get them to
              join up. */}
              <Route
                exact
                path="/"
                component={LandingPage}
              />
              <Route
                exact
                path="/info"
                component={ContactInfo}
              />
              <Route
                exact
                path="/measurements"
                component={Measurements}
              />
               <Route
                exact
                path="/needs"
                component={NeedsPage}
              />
              <Route
                exact
                path="/appointment"
                component={AppointmentPage}
              />
              <Route
                exact
                path="/confirmation"
                component={ConfirmationPage}
              />
              <Route
                exact
                path="/resources"
                component={ResourcesPage}
              />

              {/* For protected routes, in the case that you provide a
              redirect attribute the path value for that attribute will
              cause a path redirect when the User is logged in. */}
              {/* <ProtectedRoute
                exact
                path="/admindash"
                redirect="/admindash"
                component={AdminDashboardPage}
              /> */}
              {/* Visiting localhost:3000/about will show the about page.
              This is a route anyone can see, no login necessary */}
              <Route
                exact
                path="/about"
                component={AboutPage}
              />
              {/* For protected routes, the view could show one of several things on the same route.
              Visiting localhost:3000/admin will show the UserPage if the user is logged in.
              If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
              Even though it seems like they are different pages, the user is always on localhost:3000/admin */}
              <ProtectedRoute
                exact
                path="/admindash"
                component={AdminDashboardPage}
              />
              {/* This works the same as the other protected route, except that if the user is logged in,
              they will see the info page instead. */}

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </div>
        {/* END .site-bd */}

        <div className="site-ft">
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect(mapStateToProps)(App);
