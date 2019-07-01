import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ConfirmationPageItem from '../ConfirmationPageItem/ConfirmationPageItem';


class ConfirmationPageList extends Component {
    componentDidMount() {
        // this.props.dispatch({
        //     type: 'GET_REVIEW',
        //     payload: {id: 1}
        // })

        // // SET USER INFO MANUALLY HERE:
        // /*
        // const userInfo = {
        //     name:
        //     ...
        // }

        // send this to the reducer
        // */
    }
    render() {
        return (
            <div>
                <ConfirmationPageItem info={this.props.store.setReview} />

            </div>
        );
    }
}

export default connect(mapStateToProps)(ConfirmationPageList);
