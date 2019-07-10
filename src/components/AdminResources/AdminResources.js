import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminResourcesList from '../AdminResourcesList/AdminResourcesList';

class AdminResources extends Component {
  render() {
    return (
      <div>
        <h2>Resources</h2>
        <AdminResourcesList />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminResources);
