import React, { Component } from 'react';
import {
    TimePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import {
    Container,
} from '@material-ui/core/';

class CalendarTimePicker extends Component {
    render() {
        console.log(this.props.selectedTime);
        return (
            <Container maxWidth='xs'>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <TimePicker
                        variant="inline"
                        label="Inline mode"
                        value={this.props.selectedTime}
                        onChange={this.props.handleTimeChange}
                    />
                </MuiPickersUtilsProvider>
            </Container>
        )
    }
}

export default CalendarTimePicker;