import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class TwilioButton extends Component {
    render (){
        return (
            <div>
                <button>Confirm</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TwilioButton);
