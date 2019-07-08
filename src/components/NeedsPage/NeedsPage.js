import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import axios from 'axios';

class NeedsPage extends Component {
    constructor() {
        super();

        this.state = {
            otherIsEditable: false,
            needsType: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            needsType: event.target.value
        });console.log(this.state.needsType);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_NEEDS',
            payload: {
                ...this.state.needsType,
            id: this.props.store.setReview.id,
            }
        })
        this.setState({
            stats: {
                ...this.state.needsType
            }
        });
        this.props.history.push('/appointment');
    }

    editOtherField = () => {
        this.setState({
          otherIsEditable: true,
        });
      }

    render() {
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
                        {this.state.otherIsEditable ?
                            <div>
                                <form method="post" action="/login">
                                    <input type="text" id="other" name="other" placeholder="other need" onChange={this.handleChange} />
                                </form>
                            </div>:
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value="Other"
                                    checked={this.state.needsType === " "}
                                    onChange={this.editOtherField}
                                    />
                                    Other
                            </label>
                        </li>
            }
                    </ul>
                    <button type="submit">Select Type</button>
                </form>
            </div>
        )
    }
};

export default connect(mapStateToProps)(NeedsPage);
