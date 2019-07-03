import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class ResourcesPageItem extends Component {

  render() {
    return (
      <div>
         Title:
         {this.props.resource.title}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ResourcesPageItem);
