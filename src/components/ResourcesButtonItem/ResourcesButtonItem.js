import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { Button, Grid } from '@material-ui/core';

class ResourcesButtonItem extends Component {
    changeResources = (value) => {
        this.props.dispatch({
            type: 'GET_NEED_RESOURCES',
            payload: { categories_name: value }
        })
    }

    render() {
        return (
            <Button onClick={(e) => this.changeResources(this.props.value)} value={this.props.value}>{this.props.name}</Button>
        )
    }
}

export default connect(mapStateToProps)(ResourcesButtonItem);