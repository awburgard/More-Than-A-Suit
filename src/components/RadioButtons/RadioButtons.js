import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class RadioButtons extends Component {
    render() {
        return (
            <form>
                <p>Select Your Need:</p>
                <ul>
                    <li>
                        <label>
                            <input
                                type="radio"
                                value="Job"
                                checked={this.props.need === "Job"}
                                onChange={this.props.handleChange('need')}
                            />
                            Job
                            </label>
                    </li>

                    <li>
                        <label>
                            <input
                                type="radio"
                                value="Funeral"
                                checked={this.props.need === "Funeral"}
                                onChange={this.props.handleChange('need')}
                            />
                            Funeral
                            </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="radio"
                                value="Court"
                                checked={this.props.need === "Court"}
                                onChange={this.props.handleChange('need')}
                            />
                            Court
                            </label>
                    </li>
                </ul>
            </form>
        )
    }
}

export default connect(mapStateToProps)(RadioButtons);
