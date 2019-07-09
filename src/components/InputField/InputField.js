import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import RadioButtons from '../RadioButtons/RadioButtons';
import moment from 'moment'

class InputField extends Component {

    state = {
        first_name: this.props.info.first_name,
        last_name: this.props.info.last_name,
        zip: this.props.info.zip,
        phone: this.props.info.phone,
        email: this.props.info.email,
        height_feet: this.props.info.height_feet,
        height_inches: this.props.info.height_inches,
        weight: this.props.info.weight,
        waist: this.props.info.waist,
        need: this.props.info.need,
        appointment_date: this.props.info.appointment_date,
        appointment_type: this.props.info.appointment_type,
        appointment_time: this.props.info.appointment_time,
    }

    saveInfo = () => {
        this.props.dispatch({
            type: 'PUT_REVIEW',
            payload: {
                id: this.props.info.id,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                zip: this.state.zip,
                phone: this.state.phone,
                email: this.state.email,
                height_feet: this.state.height_feet,
                height_inches: this.state.height_inches,
                weight: this.state.weight,
                waist: this.state.waist,
                need: this.state.need,
                appointment_date: this.state.appointment_date,
                appointment_type: this.state.appointment_type,
                appointment_time: this.state.appointment_time
            }
        })
        this.props.toggleEdit();
    }


    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                First Name: <input type="text" value={this.state.first_name} onChange={this.handleInputChangeFor('first_name')}></input><br />
                Last Name: <input type="text" value={this.state.last_name} onChange={this.handleInputChangeFor('last_name')}></input><br />
                Zip Code: <input type="text" value={this.state.zip} onChange={this.handleInputChangeFor('zip')}></input> <br />
                Phone Number: <input type="text" value={this.state.phone} onChange={this.handleInputChangeFor('phone')}></input> <br />
                Email: <input type="text" value={this.state.email} onChange={this.handleInputChangeFor('email')}></input> <br />
                Height: Feet <input type="number" value={this.state.height_feet} onChange={this.handleInputChangeFor('height_feet')}></input>
                Inches <input type="number" value={this.state.height_inches} onChange={this.handleInputChangeFor('height_inches')}></input><br />
                Weight: <input type="number" value={this.state.weight} onChange={this.handleInputChangeFor('weight')}></input> <br />
                Waist: <input type="number" value={this.state.waist} onChange={this.handleInputChangeFor('waist')}></input> <br />
                <RadioButtons handleChange={this.handleInputChangeFor} need={this.state.need} />
                <br />
                {/* <AppointmentPage /> */}
                {/* TO DO: This will be replaced by the appointment page component once google API is figured out */}
                {/* Appointment Type: <input value={this.state.appointment_type} onChange={this.handleInputChangeFor('appointment_type')}></input> <br />
                Appointment Date: <input value={moment(this.state.appointment_date).format(`MMMM Do YYYY`)} onChange={this.handleInputChangeFor('appointment_date')}></input> <br />
                Appointment Time: <input value={moment(this.state.appointment_time, 'HH:mm:ss').format(`h:mm a`)} onChange={this.handleInputChangeFor('appointment_time')}></input> <br /> */}
                Your appointment has already been set. To change your appointment please call...
                <button onClick={this.saveInfo}>Save</button>
            </div >
        )
    }
}

export default connect(mapStateToProps)(InputField);
