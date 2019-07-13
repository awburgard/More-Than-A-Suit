import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { Button } from '@material-ui/core';

class AdminEditButton extends Component {
    render() {
        let conditionalButton;
        if (this.props.editing) {
            conditionalButton = null;
        } else {
            conditionalButton = <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.props.toggleEdit}
                                >   Edit
                                </Button>
        }
        return (
            <div>
                {conditionalButton}
            </div>
        );
    }
}

export default connect(mapStateToProps)(AdminEditButton);
