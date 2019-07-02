import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class InputField extends Component {

    state ={
        first_name : this.props.info.first_name,
        last_name: this.props.info.last_name,
        zip: this.props.info.zip,
        phone: this.props.info.phone,
        email: this.props.info.email,
        height_feet:this.props.info.height_feet,
        height_inches:this.props.info.height_inches,
        weight:this.props.info.weight,
        waist:this.props.info.waist,
        need:this.props.info.need,
        appointment_date:this.props.info.appointment_date,
        appointment_type:this.props.info.appointment_type,
        time: this.props.info.time,
    }


    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                First Name: <input type="text" value={this.props.info.first_name} onChange={this.handleInputChangeFor('first_name')}></input><br />
                Last Name: <input type="text" value={this.props.info.last_name} onChange={this.handleInputChangeFor('last_name')}></input><br />
                Zip Code: <input type="text" value={this.props.info.zip} onChange={this.handleInputChangeFor('zip')}></input> <br />
                Phone Number: <input type="text" value={this.props.info.phone} onChange={this.handleInputChangeFor('phone')}></input> <br />
                Email: <input type="text" value={this.props.info.email} onChange={this.handleInputChangeFor('email')}></input> <br />
                Height: Feet <input type="number" value={this.props.info.height_feet} onChange={this.handleInputChangeFor('height_feet')}></input>
                Inches <input type="number" value={this.props.info.height_inches} onChange={this.handleInputChangeFor('height_inches')}></input><br />
                Weight: <input type="number" value={this.props.info.weight} onChange={this.handleInputChangeFor('weight')}></input> <br />
                Waist: <input type="number" value={this.props.info.waist} onChange={this.handleInputChangeFor('waist')}></input> <br />
                Need: <input value={this.props.info.need} onChange={this.handleInputChangeFor('need')}></input><br />
                Appointment Type: <input value={this.props.info.appointment_type} onChange={this.handleInputChangeFor('appointment_type')}></input> <br />
                Appointment Date: <input value={this.props.info.appointment_date} onChange={this.handleInputChangeFor('appointment_date')}></input> <br />
                Appointment Time: <input value={this.props.info.time} onChange={this.handleInputChangeFor('time')}></input> <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(InputField);
