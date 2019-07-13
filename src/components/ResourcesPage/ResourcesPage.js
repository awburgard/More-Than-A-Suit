import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ResourcesPageList from '../ResourcesPageList/ResourcesPageList';
import ResourcesButtonList from '../ResourceButtonList/ResourceButtonList';
import { Typography, Paper, Box, Container } from '@material-ui/core';


class ResourcesPage extends Component {

  componentDidMount() {
    if(this.props.store.setReview.need){
      this.props.dispatch({
          type: 'GET_NEED_RESOURCES',
          payload: { categories_name: this.props.store.setReview.need.toLowerCase() }
      })
  } else {
      this.props.dispatch({
          type: 'GET_NEED_RESOURCES',
          payload: { categories_name: 'job' }
      })
  }
  }
  render() {
    return (
      <Container className="behindPaper">
      <Paper elevation={5}>
        <Box m={3} p={5}>
        <Typography align="center" variant='h5' gutterBottom={true}>Resources</Typography>
          <ResourcesButtonList />
          <ResourcesPageList />
          </Box>
      </Paper>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(ResourcesPage);
