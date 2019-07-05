import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class ResourcesPageItem extends Component {
  render() {
    return (
      <div>
        <div>
          Title: {this.props.resource.title}
          <br />
          Description: {this.props.resource.description}
          <br />
          Link: {this.props.resource.link}
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps)(ResourcesPageItem);