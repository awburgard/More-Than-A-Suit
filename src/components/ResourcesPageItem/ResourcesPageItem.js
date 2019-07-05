import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class ResourcesPageItem extends Component {
  componentDidMount(){
    this.props.dispatch({
      type: 'GET_NEED_RESOURCES',
      payload: {categories_id: 1}
    })
  }
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
//If the need click is == job, render job resources, etc
   //get need from user
   //get resources from resources table
   //get categories/resources based on need AND click from joint table?
   //componentDidMount that gets joint table?
   //Conditional rendering of resources
   //Sagas and Reducers?