import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import Link from '@material-ui/core/Link'
import { Grid, Typography, Box } from '@material-ui/core';

class ResourcesPageItem extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={12} >
          <Typography gutterBottom={true}>
            <Link underline="none" href={this.props.resource.link}>{this.props.resource.title}</Link> <br />
            {this.props.resource.description}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(ResourcesPageItem);