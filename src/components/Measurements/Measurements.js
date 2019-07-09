import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
            <form onSubmit={this.handleClick}>
                <Typography variant="h5" component="h3">
                    Measurements
                </Typography>
                <Paper
                elevation={10}>
                <Typography component="p">
                    Knowing these measurements are an important part of getting the right fit
                </Typography>
                    <TextField
                        label="Height"
                        value={this.state.stats.height_feet}
                        onChange={this.onFormChange('height_feet')}
                        autoFocus={true}
                        margin="normal"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                        }}
                    />
                    <TextField
                        label=" "
                        value={this.state.stats.height_inches}
                        onChange={this.onFormChange('height_inches')}
                        margin="normal"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">in</InputAdornment>,
                        }}
                    /> <br />
                    <TextField
                        label="Weight"
                        value={this.state.stats.weight}
                        onChange={this.onFormChange('weight')}
                        margin="normal"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                        }}
                    /> <br />
                    <TextField
                        label="Waist"
                        value={this.state.stats.waist}
                        onChange={this.onFormChange('waist')}
                        margin="normal"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">in</InputAdornment>,
                        }}
                    /> <br />
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Next
                    </Button>
                </Paper>
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