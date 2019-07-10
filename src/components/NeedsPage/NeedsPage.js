import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




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
                <TextField type="text" id="other" name="other" placeholder="other need" onChange={this.handleChangeOtherField} />
            </div>
        );

        if (this.state.otherIsEditable === false) {
            otherField = null;
        }
        return (


            <div>
                <Paper>
                    <FormControl>
                    <FormLabel>What occasion is this Suit for?</FormLabel>
                        <RadioGroup>
                            <label>
                                <Radio
                                    type="radio"
                                    value="Job"
                                    checked={this.state.needsType === "Job"}
                                    onChange={this.handleChange}
                                />
                                Job
                            </label>
                            <label>
                                <Radio
                                    type="radio"
                                    value="Court"
                                    checked={this.state.needsType === "Court"}
                                    onChange={this.handleChange}
                                    control={<Radio color="primary" />}
                                />
                                Court
                            </label>
                            <label>
                                <Radio
                                    type="radio"
                                    value="Funeral"
                                    checked={this.state.needsType === "Funeral"}
                                    onChange={this.handleChange}
                                    control={<Radio color="primary" />}
                                />
                                Funeral
                            </label>
                            <label>
                                <Radio
                                    type="radio"
                                    value="Other"
                                    checked={this.state.needsType === "Other"}
                                    onChange={this.handleChange}
                                    control={<Radio color="primary" />}
                                />
                                Other
                            </label>
                                {otherField}
                        <Button variant="contained" onClick={this.handleSubmit}>Select Type</Button>
                        </RadioGroup>
                    </FormControl>
                </Paper>
            </div>
        )
    }
};

export default connect(mapStateToProps)(NeedsPage);
