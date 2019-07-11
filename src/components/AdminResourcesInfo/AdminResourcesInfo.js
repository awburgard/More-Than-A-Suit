import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminDeleteButton from '../AdminDeleteButton/AdminDeleteButton';
import EditButton from '../EditButton/EditButton';
import { Paper, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';


class AdminResourcesInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TableRow>
                <TableCell align="left">{this.props.resources.title}</TableCell>
                <TableCell align="left">{this.props.resources.description}</TableCell>
                <TableCell align="left">{this.props.resources.link}</TableCell>
                <TableCell align="left">{this.props.resources.category_name}</TableCell>
                <TableCell align="left"><EditButton editing={this.props.editing} toggleEdit={this.props.toggleEdit} saveInfo={this.props.saveInfo} /></TableCell>
                <TableCell align="left"><AdminDeleteButton resources={this.props.resources} /></TableCell>
            </TableRow>
        )
    }
}

export default connect(mapStateToProps)(AdminResourcesInfo);

