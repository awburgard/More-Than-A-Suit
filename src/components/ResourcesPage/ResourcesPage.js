import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ResourcesPageList from '../ResourcesPageList/ResourcesPageList';
import ResourcesButtonList from '../ResourceButtonList/ResourceButtonList';

class ResourcesPage extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_NEED_RESOURCES',
      payload: { categories_name: 'funeral' }
    })
  }
  render() {
    return (
      <div>
        <h2>Resources Page</h2>
        <ResourcesButtonList />
        <ResourcesPageList />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ResourcesPage);
