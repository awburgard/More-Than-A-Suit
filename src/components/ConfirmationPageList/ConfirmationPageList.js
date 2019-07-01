import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ConfirmationPageItem from '../ConfirmationPageItem/ConfirmationPageItem';


class ConfirmationPageList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_REVIEW',
            payload: 1
        })
    }
    render() {
        const reviewInfo = this.props.reduxState.setReview.map((info, index) => {
            return (
                <div key={index}>
                    <ConfirmationPageItem key={index} info={info} index={index} />
                </div>
            )
        })
        return (
            <div>
                {reviewInfo}
            </div>
        );
    }
}

export default connect(mapStateToProps)(ConfirmationPageList);
