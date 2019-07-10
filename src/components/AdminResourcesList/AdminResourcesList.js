import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminResourcesItem from '../AdminResourcesItem/AdminResourcesItem';
import AdminAddResource from '../AdminAddResource/AdminAddResource';
import { Button } from '@material-ui/core';


class AdminResourcesList extends Component {
  state = {
    add: false,
    show: false,
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_RESOURCES'
    })
  }

  toggleAdd = () => {
    this.setState({
      add: !this.state.add,
      show: true,
    })
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
    this.toggleAdd();
  }

  render() {
    let conditionalAddField;
    if (this.state.add) {
      conditionalAddField = <AdminAddResource toggleAdd={this.toggleAdd} show={this.state.show} handleClose={this.handleClose}/>
    } else {
      conditionalAddField = null;
    }

    let conditionalAddButton;
    if (this.state.add === false) {
      conditionalAddButton = <Button variant="contained" color="primary" onClick={this.toggleAdd}>Add</Button>
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
