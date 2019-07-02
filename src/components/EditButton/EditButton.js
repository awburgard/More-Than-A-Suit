import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class EditButton extends Component {
    editInfo = () => {

    }

    render() {
        return (
            <div>
                <button onClick={this.editInfo}>Edit</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EditButton);
