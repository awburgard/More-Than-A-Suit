import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import EditButton from '../EditButton/EditButton';
import AdminEditResource from '../AdminEditResource/AdminEditResource';
import AdminResourcesInfo from '../AdminResourcesInfo/AdminResourcesInfo';
import AdminDeleteButton from '../AdminDeleteButton/AdminDeleteButton';

class AdminResourcesItem extends Component {
  state = {
    editing: false,
    show: false,
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
    this.toggleEdit();
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
      show: true,
    })
  }

  render() {
    let conditionalElement;
    if (this.state.editing) {
      conditionalElement = <AdminEditResource show={this.state.show} resources={this.props.resources} toggleEdit={this.toggleEdit} handleClose={this.handleClose}/>
    } else {
      conditionalElement = <AdminResourcesInfo resources={this.props.resources} />
    }

    return (
      <div>
        {conditionalElement}
        <EditButton editing={this.state.editing} toggleEdit={this.toggleEdit} saveInfo={this.saveInfo} />
        <AdminDeleteButton resources={this.props.resources} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AdminResourcesItem);
