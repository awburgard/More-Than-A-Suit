import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class Measurements extends Component {
    state = {
        height_feet: '',
        height_inches: '',
        weight: '',
        waist: ''
    }

    render() {
        return(
            <div>
                I WOKE UP IN BEAST MODE
            </div>
        )
    }
};

export default connect(mapStateToProps)(Measurements);