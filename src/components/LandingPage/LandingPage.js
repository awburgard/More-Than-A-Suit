import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import './LandingPage.css'
import { Link } from 'react-router-dom';
import {
    TextField,
    Paper,
    Typography,
    Button,
    Box,
    Grid,
    Container
} from '@material-ui/core/';


class LandingPage extends Component {
    goToInfo = (event) => {
        this.props.history.push('/info');
    }

    render() {
        return (
            <Container>
                <Paper>
                    <Grid container spacing={2} className="bg-img-landing" >
                        <Grid item xs={12}>
                            <Typography align="center" variant="h1">Welcome to More Than A Suit</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h5">Overview</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center">Register and make an appointment to be fitted with the perfect suit and additional resources</Typography>
                        </Grid>
                        <Grid item xs={12} alignItems='center'>
                            <Button variant="contained" color="primary" onClick={this.goToInfo}>Suit Up</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }
};

export default connect(mapStateToProps)(LandingPage);
