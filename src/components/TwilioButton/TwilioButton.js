import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class TwilioButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
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

    sendText = () => {
        this.props.dispatch({
            type: 'POST_TWILIO',
            payload: {
                phoneNumber: this.props.info.phone,
                appointmentDate: this.props.info.appointment_date,
                appointmentTime: this.props.info.appointment_time
            }
        })

        this.props.history.push('/resources');
    }

    render() {
        return (
            <div>
                <button onClick={this.sendText}>Confirm</button>
                <SweetAlert
                    show={this.state.show}
                    title="Success!"
                    type="success"
                    text="Your text was sent!"
                    confirmButtonText= "Yaaas!"
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(TwilioButton);
