import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ConfirmationPageList from '../ConfirmationPageList/ConfirmationPageList';

class ConfirmationPage extends Component {

//TO DO: This is for testing purposes ONLY
componentDidMount(){
  this.props.dispatch({
    type: 'GET_REVIEW',
    payload: {id: 1}
  })
}

  render() {
    return (
      <div>
        <h2>Confirmation Page</h2>
          <ConfirmationPageList/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ConfirmationPage);
