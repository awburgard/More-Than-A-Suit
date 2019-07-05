import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import Swal from 'sweetalert2';

class ConfirmAlert extends Component {



    render() {
        return(
            <div>
                YOUR CONTENT
            </div>
        )
    }
};

export default connect(mapStateToProps)(ConfirmAlert);