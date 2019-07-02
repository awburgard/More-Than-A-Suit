import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ConfirmationPageItem from '../ConfirmationPageItem/ConfirmationPageItem';


class ConfirmationPageList extends Component {
    render() {
        return (
            <div>
                <ConfirmationPageItem info={this.props.store.setReview} />

            </div>
        );
    }
}

export default connect(mapStateToProps)(ConfirmationPageList);
