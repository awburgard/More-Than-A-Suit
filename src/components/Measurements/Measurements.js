import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import './Measurements.css';

//Material UI
import {
    TextField,
    InputAdornment,
    Paper,
    Typography,
    Button,
    Box,
    Grid,
    Container
} from '@material-ui/core/';

class Measurements extends Component {
    state = {
        stats: {
            height_feet: '',
            height_inches: '',
            weight: '',
            waist: ''
        }
    }

    onFormChange = (dataname) => event => {
        this.setState({
            stats: {
                ...this.state.stats,
                [dataname] : event.target.value
            }
        });
    }

    handleClick = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_MEASUREMENTS',
            payload: {
                ...this.state.stats,
            id: this.props.store.setReview.id,
            }
        })
        this.setState({
            stats: {
                ...this.state.stats,
                height_feet: '',
                height_inches: '',
                weight: '',
                waist: ''
            }
        });
        this.props.history.push('/needs');
    }

    render() {
        const measurementInfo = (
            <Container className="behindPaper" maxWidth="xs">
                <Paper elevation={5}>
                <Box m={3} p={5}>
                    <Typography variant="h5" gutterBottom={true}>
                        Measurements
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Note: Knowing these measurements are an important part of getting the right fit.
                    </Typography>
                    <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                    <TextField
                            label="Height"
                            value={this.state.stats.height_feet}
                            onChange={this.onFormChange('height_feet')}
                            autoFocus={true}
                            margin="normal"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                            }}
                            fullWidth={true}
                        />
                        </Grid>
                        <Grid item xs={6} md={6}>
                    <TextField
                        label=" "
                        value={this.state.stats.height_inches}
                        onChange={this.onFormChange('height_inches')}
                        margin="normal"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">in</InputAdornment>,
                        }}
                        fullWidth={true}

                    /> </Grid> <br />
                    <Grid item xs={12} md={12}>
                    <TextField
                        label="Weight"
                        value={this.state.stats.weight}
                        onChange={this.onFormChange('weight')}
                        margin="normal"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                        }}
                        fullWidth={true}

                    /> </Grid> <br />
                    <Grid item xs={12} md={12}>
                    <TextField
                        label="Waist"
                        value={this.state.stats.waist}
                        onChange={this.onFormChange('waist')}
                        margin="normal"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">in</InputAdornment>,
                        }}
                        fullWidth={true}
                    /> 
                    </Grid>
                    </Grid>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick= {this.handleClick}
                    >
                        Next
                    </Button>
                </Box>
                </Paper>
            </Container>
        )

        return(
            <div>
                {measurementInfo}
            </div>
        )
    }
};

export default connect(mapStateToProps)(Measurements);