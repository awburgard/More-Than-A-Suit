import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import {
    Grid,
    Typography,
    Box,
    Container,
    Paper,
    TextField,
    Button,
    FormControl,
    Radio,
    RadioGroup
} from '@material-ui/core';

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
        });
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
        }); this.props.history.push('/appointment');
    }

    render() {
        let otherField = (
            <Box marginBottom={1}>
                <TextField type="text" id="other" name="other" placeholder="How can we help?" onChange={this.handleChangeOtherField} />
            </Box>
        );

        if (this.state.otherIsEditable === false) {
            otherField = null;
        }
        return (
            <Container maxWidth='xs'>
                <Paper elevation={5}>
                    <Box m={1} p={3}>
                        <FormControl>
                            <Typography variant="h5" gutterBottom={true}>Occasion:</Typography>
                            <Grid container spacing={2}>
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
                                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Next</Button>
                            </RadioGroup>
                            </Grid>
                        </FormControl>
                    </Box>
                </Paper>
            </Container>
        )
    }
};

export default connect(mapStateToProps)(NeedsPage);
