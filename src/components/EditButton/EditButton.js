import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { Button } from '@material-ui/core';

class EditButton extends Component {
    render() {
        let conditionalButton;
        if (this.props.editing) {
            conditionalButton = null;
        } else {
            conditionalButton = <Button
                variant="contained"
                color="secondary"
                onClick={this.props.toggleEdit}
                fullWidth={true}
            >   Edit
                                </Button>
        }
        return (
            <div className="vr">
                {conditionalButton}
            </div>
        );
    }
}

export default connect(mapStateToProps)(EditButton);
