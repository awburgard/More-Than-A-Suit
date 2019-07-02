import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class EditButton extends Component {
    saveInfo = (action) => {
        this.props.dispatch({
            type: 'PUT_REVIEW',
            payload: action.payload
        })
        this.props.toggleEdit();

    }

    render() {
        let conditionalButton;
        if (this.props.editing) {
            conditionalButton = <button onClick={this.saveInfo}>Save</button>
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
