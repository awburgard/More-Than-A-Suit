import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ConfirmationPageList from '../ConfirmationPageList/ConfirmationPageList';

class ConfirmationPage extends Component {
  render() {
    return (
      <div>
          <ConfirmationPageList/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ConfirmationPage);
