import React, { Component } from 'react';
import {
    TimePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

class CalendarTimePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTime: ''
        };
    }


    render() {
        return (
            <div>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <TimePicker
                        variant="inline"
                        label="Inline mode"
                        value={this.selectedTime}
                        onChange={this.props.handleTimeChange}
                    />
                </MuiPickersUtilsProvider>
            </div>
        )
    }
}

export default CalendarTimePicker;