import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class ResourcesButtonItem extends Component {
    changeResources = (event) => {
        this.props.dispatch({
            type: 'GET_NEED_RESOURCES',
            payload: { categories_name: event.target.value }
        })
    }

    render() {
        return (
            <button onClick={this.changeResources} value={this.props.value}>{this.props.name}</button>
        )
    }
}

export default connect(mapStateToProps)(ResourcesButtonItem);