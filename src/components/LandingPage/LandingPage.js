import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import './LandingPage.css'
import { Paper, Typography, Button, Box, Grid, Container } from '@material-ui/core/';


class LandingPage extends Component {
    goToInfo = (event) => {
        this.props.history.push('/info');
    }

    render() {
        return (
            <Container className="hero" maxWidth='md'>
                <Paper elevation={5} >
                    <Box m={3} p={6}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} >
                                <Typography gutterBottom={true} align="center" variant="h4">Welcome to </Typography>
                                <Typography gutterBottom={true} align="center" variant="h2">More Than A Suit</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom={true}  align="center" variant="h6">Overview</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom={true}  align="center">Register and make an appointment to be fitted with the perfect suit and additional resources</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom={true}  align="center">
                                    <Button variant="contained" color="primary" onClick={this.goToInfo}>Suit Up</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        )
    }
};

export default connect(mapStateToProps)(LandingPage);
