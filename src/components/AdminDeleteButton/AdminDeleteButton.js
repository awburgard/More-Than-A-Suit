import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

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
          <button onClick={this.deleteResource}>Delete</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminDeleteButton);
