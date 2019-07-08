import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';


class AdminResourcesInfo extends Component {
    render() {
        return (
            <div>
                Title: {this.props.resources.title} <br />
                Description: {this.props.resources.description} <br />
                Link: <a href={this.props.resources.link}>Link</a> <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(AdminResourcesInfo);

