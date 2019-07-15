import React, { Component } from 'react';
import {
    TimePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import {
    Grid,
} from '@material-ui/core/';

class CalendarTimePicker extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <TimePicker
                            variant="inline"
                            label="Select Your Time"
                            value={this.props.selectedTime}
                            onChange={this.props.handleTimeChange}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            </Grid>
        )
    }
}

export default CalendarTimePicker;