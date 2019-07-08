import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class NeedsPage extends Component {
    constructor() {
        super();

        this.state = {
            needsType: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            needsType: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        alert(`${this.state.needsType} selected.`);
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
                        </li>
                    </ul>
                    <button type="submit">Select Type</button>
                </form>
            </div>
        )
    }
};

export default connect(mapStateToProps)(NeedsPage);