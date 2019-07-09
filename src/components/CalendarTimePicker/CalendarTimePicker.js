import React, { Component } from 'react';
import {
    TimePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

class CalendarTimePicker extends Component {
    render() {
        console.log(this.props.selectedTime);
        return (
            <div>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <TimePicker
                        variant="inline"
                        label="Inline mode"
                        value={this.props.selectedTime}
                        onChange={this.props.handleTimeChange}
                    />
                </MuiPickersUtilsProvider>
            </div>
        )
    }
}

export default CalendarTimePicker;