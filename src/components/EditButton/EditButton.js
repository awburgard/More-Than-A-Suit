import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class EditButton extends Component {
    render() {
        let conditionalButton;
        if (this.props.editing) {
            conditionalButton = null;
        } else {
            conditionalButton = <button onClick={this.props.toggleEdit}>Edit</button>

        }
        return (
            <div>
                {conditionalButton}
            </div>
        );
    }
}

export default connect(mapStateToProps)(EditButton);
