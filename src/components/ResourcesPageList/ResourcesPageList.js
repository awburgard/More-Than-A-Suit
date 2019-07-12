import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ResourcesPageItem from '../ResourcesPageItem/ResourcesPageItem';


class ResourcesPageList extends Component {
  render() {
    let resources = this.props.store.needs.map((resource, index) => {
      return (
        <div key={index}>
          <ResourcesPageItem resource={resource} index={index} />
        </div>
      )

    })
    return (
      <div>
        {resources}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ResourcesPageList);
