import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import axios from 'axios';

class NeedsPage extends Component {
    constructor() {
        super();

        this.state = {
            otherIsEditable: false,
            needsType: '',
            otherText: ''
        };
    }

    handleChange = (event) => {
        let otherIsEditable = false;
        if (event.target.value === 'Other') {
            otherIsEditable = true;
        }
        this.setState({
            needsType: event.target.value,
            otherIsEditable,
        });console.log(this.state.needsType);
    }

    handleChangeOtherField = (event) => {
        this.setState({
            otherText: event.target.value,
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let need = this.state.needsType;
        if (this.state.needsType === 'Other') {
            need = this.state.otherText
        }
        this.props.dispatch({
            type: 'SET_NEEDS',
            payload: {
            need: need,
            id: this.props.store.setReview.id,
            }
        });this.props.history.push('/appointment');
    }

    render() {
        let otherField = (
            <div>
                <input type="text" id="other" name="other" placeholder="other need" onChange={this.handleChangeOtherField} />
            </div>
        );

        if (this.state.otherIsEditable === false) {
            otherField = null;
        }
        return (
            <div>
                <h2>What occasion is this Suit for? </h2>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="Job"
                                    checked={this.state.needsType === "Job"}
                                    onChange={this.handleChange}
                                />
                                Job
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="Court"
                                    checked={this.state.needsType === "Court"}
                                    onChange={this.handleChange}
                                />
                                Court
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="Funeral"
                                    checked={this.state.needsType === "Funeral"}
                                    onChange={this.handleChange}
                                />
                                Funeral
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="Other"
                                    checked={this.state.needsType === "Other"}
                                    onChange={this.handleChange}
                                />
                                Other
                            </label>

                            {otherField}
                        </li>
                    </ul>
                    <button type="submit">Select Type</button>
                </form>
            </div>
        )
    }
};

export default connect(mapStateToProps)(NeedsPage);
