import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { MenuItem, Select } from '@material-ui/core';

class NeedSelector extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_CATEGORIES'
        })
    }

    render() {
        const categoryOptions = this.props.store.categories.map((category, index) => {
            return <MenuItem key={index} value={category.id}>{category.category_name}</MenuItem>
        })
        categoryOptions.unshift(<MenuItem value={'default'} key={-1}>Select a Need</MenuItem>)
        return (
            <Select value={this.props.value} onChange={this.props.onChange}>{categoryOptions}</Select>
        );
    }
}

export default connect(mapStateToProps)(NeedSelector);




