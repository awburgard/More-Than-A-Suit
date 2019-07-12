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
      confirmButtonText: "Yeah!",
      cancelButtonText: "No!",
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.dispatch({
            type: 'DELETE_RESOURCE',
            payload: {
              id: this.props.resources.resources_id,
            }
          })
          Swal.fire('Poof! Your resource has been removed!', {
            type: 'success',
          });
        } else {
          Swal.fire('Your resources is safe!', {
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
