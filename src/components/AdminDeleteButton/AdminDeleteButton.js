import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';

class AdminDeleteButton extends Component {

  deleteResource = (event) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will delete your resource',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yeah, delete it!",
      cancelButtonText: "No, cancel it!",
      allowOutsideClick: false,
    })
      .then((result) => {
        if (result.value) {
          this.props.dispatch({
            type: 'DELETE_RESOURCE',
            payload: {
              id: this.props.resources.resources_id,
            }
          })
          Swal.fire({
            title: 'Poof! Your resource has been removed!',
            type: 'success',
          });
        } else {
          Swal.fire( {
            title:'Your resource is safe!',
            type: 'info',
          })
        }
      })
  }

  render() {
    return (
      <div>
        <Button variant="contained" color='primary' onClick={this.deleteResource}>Delete</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminDeleteButton);
