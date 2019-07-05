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

    onFormChange = (dataname) => event => {
        this.setState({
            newApproved: {
                ...this.state.newApproved,
                [dataname] : event.target.value
            }
        });
    }

    handleClick = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_APPROVED',
            payload: this.state.newApproved
        })
        this.setState({
            newApproved: {
                ...this.state.newApproved,
                name: '',
                number: '',
            }
        });
    }

    render() {
        const measurementInfo = (
            <form className="addField" onSubmit={this.addNewApproved}>
                <span className="formHeader">Add New Approved:</span>
                <input type="text"
                    value={this.state.newApproved.name}
                    onChange={this.onFormChange('name')}
                    placeholder="Name"
                />
                <NumberFormat
                    format="(###) ###-####"
                    value={this.state.newApproved.number}
                    onChange={this.onFormChange('number')}
                    mask="_"
                    placeholder="Number"
                />
                <input type="submit" value="Add"/>
            </form>
    )

        return(
            <div>
                {measurementInfo}
            </div>
        )
    }
};

export default connect(mapStateToProps)(Measurements);