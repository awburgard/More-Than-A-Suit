import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { Button } from '@material-ui/core'

class AdminDeleteButton extends Component {

  deleteResource = (event) => {
    this.props.dispatch({
      type: 'DELETE_RESOURCE',
      payload: {
        id: this.props.resources.resources_id,
      }
    })
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.deleteResource}>Delete</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminDeleteButton);
