import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { Paper, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';


class AdminResourcesInfo extends Component {
    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" component="th" scope="row">Title</TableCell>
                            <TableCell align="left" component="th" scope="row">Description</TableCell>
                            <TableCell align="left" component="th" scope="row">Link</TableCell>
                            <TableCell align="left" component="th" scope="row">Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableCell>{this.props.resources.title}</TableCell>
                        <TableCell>{this.props.resources.description}</TableCell>
                        <TableCell>{this.props.resources.link}</TableCell>
                        <TableCell>{this.props.resources.category_name}</TableCell>
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default connect(mapStateToProps)(AdminResourcesInfo);

