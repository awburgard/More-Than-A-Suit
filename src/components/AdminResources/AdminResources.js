import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminResourcesList from '../AdminResourcesList/AdminResourcesList';
import { Typography } from '@material-ui/core';

class AdminResources extends Component {
  render() {
    return (
      <div>
        <Typography gutterBottom={true} align="left" variant="h5">Resources</Typography>
        <AdminResourcesList />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminResources);
