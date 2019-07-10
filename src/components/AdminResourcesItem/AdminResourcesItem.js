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
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    let conditionalElement;
    if (this.state.editing) {
      conditionalElement = <AdminEditResource resources={this.props.resources} toggleEdit={this.toggleEdit} />
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
