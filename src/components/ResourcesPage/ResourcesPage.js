import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ResourcesPageList from '../ResourcesPageList/ResourcesPageList';

class ResourcesPage extends Component {

    componentDidMount(){
        this.props.dispatch({
            type: 'GET_RESOURCES'
        })
    }
  render() {
    return (
      <div>
        <h2>Resources Page</h2>
        <ResourcesPageList />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ResourcesPage);
