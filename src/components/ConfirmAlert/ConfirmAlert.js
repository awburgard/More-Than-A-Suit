import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class ConfirmAlert extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    testMethod = () => {
        MySwal.fire({
            title: <p>Hello World</p>,
            footer: 'Copyright 2018',
            onOpen: () => {
              
            }
          }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
          })
    }

    render() {
        return (
            <button onClick={this.testMethod}>Test SWAL!</button>
        )
    }
};

export default connect(mapStateToProps)(ConfirmAlert);