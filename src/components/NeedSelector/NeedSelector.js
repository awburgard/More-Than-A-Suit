import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class NeedSelector extends Component {
    componentDidMount (){
        this.props.dispatch({
            type: 'GET_CATEGORIES'
        })
    }

  render() {
    const categoryOptions = this.props.store.categories.map((category, index)=>{
        return <option key={index} value={category.id}>{category.category_name}</option>
    })
    categoryOptions.unshift(<option value={'default'} key={-1}>Select a Need</option>)
    return (
        <select value={this.props.value} onChange={this.props.onChange}>{categoryOptions}</select>
    );
  }
}

export default connect(mapStateToProps)(NeedSelector);




