import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import moment from "moment";
import { Grid, Typography } from '@material-ui/core';
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  caption: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '1.0rem'
    },
  },
  name: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '1.5rem'
    },
  },
});

class AdminAppointmentItem extends Component {
  render() {
    return (
      <div className="gridTable-row" >
        <Typography variant="caption" className={this.props.classes.caption}>
          <Grid container alignItems='center' alignContent='center' spacing={2} wrap="wrap">
            <Grid item xs={12} sm={12} md={2} className={this.props.classes.name}>
              {this.props.appointment.first_name} {this.props.appointment.last_name}
            </Grid>
            <Grid item xs={8} sm={6} md={2}>
              <Typography variant="caption" className="showOnlyMobile" component='div'>Phone:</Typography>
              {this.props.appointment.phone}
            </Grid>
            <Grid item xs={4} sm={6} md={1}>
              <Typography variant="caption" className="showOnlyMobile" component='div'>Zip:</Typography>
              {this.props.appointment.zip}
            </Grid>
            <Grid item xs={4} sm={4} md={1}>
              <Typography variant="caption" className="showOnlyMobile" component='div'>Height:</Typography>
              {this.props.appointment.height_feet} ' {this.props.appointment.height_inches}"
            </Grid>
            <Grid item xs={4} sm={4} md={1}>
              <Typography variant="caption" className="showOnlyMobile" component='div'>Weight:</Typography>
              {this.props.appointment.weight}
            </Grid>
            <Grid item xs={4} sm={4} md={1}>
              <Typography variant="caption" className="showOnlyMobile" component='div'>Waist:</Typography>
              {this.props.appointment.waist}
            </Grid>
            <Grid item xs={12} sm={12} md={1}>
              <Typography variant="caption" className="showOnlyMobile" component='div'>Need:</Typography>
              {this.props.appointment.need}
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Typography variant="caption" className="showOnlyMobile" component='div'>Appointment:</Typography>
              Type: {this.props.appointment.appointment_type} <br />
              Date: {moment(this.props.appointment.appointment_date).format(`MMMM Do YYYY`)}<br />
              Time: {moment(this.props.appointment.appointment_time, 'HH:mm:ss').format(`h:mm a`)}
            </Grid >
          </Grid>
        </Typography>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(AdminAppointmentItem));
