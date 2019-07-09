import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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
                <h1>Measurements</h1><br />
                <h3>Knowing these measurements is an important part of getting the right fit</h3>
                <TextField
                    label="Height"
                    helperText="Feet"
                    value={this.state.stats.height_feet}
                    onChange={this.onFormChange('height_feet')}
                    endAdornment={<InputAdornment position="end">ft</InputAdornment>}
                    margin="normal"
                    aria-describedby="weight-helper-text"
                    inputProps={{
                        'aria-label': 'Weight',
                    }}
                />
                <TextField
                    label=" "
                    helperText="Inches"
                    value={this.state.stats.height_inches}
                    onChange={this.onFormChange('height_inches')}
                    endAdornment={<InputAdornment position="end">ft</InputAdornment>}
                    margin="normal"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">in</InputAdornment>,
                      }}
                /> <br />
                <TextField
                    required={true}
                    id="standard-required"
                    label="Weight"
                    value={this.state.stats.weight}
                    onChange={this.onFormChange('weight')}
                    margin="normal"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                      }}
                />
                <h5>Waist</h5>
                <input type="number"
                    value={this.state.stats.waist}
                    onChange={this.onFormChange('waist')}
                    placeholder="Inches"
                /> */}
                <button type="submit">Next</button>
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