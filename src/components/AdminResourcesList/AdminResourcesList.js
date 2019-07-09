import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminResourcesItem from '../AdminResourcesItem/AdminResourcesItem';
import AdminAddResource from '../AdminAddResource/AdminAddResource';


class AdminResourcesList extends Component {
  state = {
    add: false,
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_RESOURCES'
    })
  }
  toggleAdd = () => {
    this.setState({
      add: !this.state.add
    })
  }
  render() {
    let conditionalAddField;
    if (this.state.add) {
      conditionalAddField = <AdminAddResource toggleAdd={this.toggleAdd} />
    } else {
      conditionalAddField = null;
    }

    let conditionalAddButton;
    if (this.state.add === false) {
      conditionalAddButton = <button onClick={this.toggleAdd}>Add</button>
    } else {
      conditionalAddButton = null;
    }

    const resources = this.props.store.resources.map((resources, index) => {
      return <AdminResourcesItem resources={resources} key={index} />
    })
    return (
      <div>
        {conditionalAddField}
        {conditionalAddButton}
        {resources}
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminResourcesList);
