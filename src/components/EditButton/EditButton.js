import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class EditButton extends Component {
    // editInfo = () => {
    //     this.props.dispatch({
    //         type: 'PUT_REVIEW',
    //         payload: {id: this.props.store.setReview.id}
    //     })

    // }

    render() {
        return (
            <div>
                <button onClick={this.props.toggleEdit}>Edit</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(EditButton);
