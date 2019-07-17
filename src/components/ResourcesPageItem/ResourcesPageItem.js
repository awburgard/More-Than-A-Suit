import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import Link from '@material-ui/core/Link'
import { Grid, Typography, Box } from '@material-ui/core';

class ResourcesPageItem extends Component {
  render() {
    return (
      <Box m={1} paddingLeft={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={12} >
          <Typography gutterBottom={true}>
            <Link underline="none" href={this.props.resource.link} target="_blank" rel="noopener noreferrer">{this.props.resource.title}</Link> <br />
            {this.props.resource.description}
          </Typography>
        </Grid>
      </Grid>
      </Box>
    );
  }
}

export default connect(mapStateToProps)(ResourcesPageItem);