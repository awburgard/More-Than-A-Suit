import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
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
            <Grid 
                container
                spacing={0}
                align="center"
                justify="center"
                direction="column"
            >
                <Grid item xs={12} md={12}>
                    <div>
                            <div className="text_alnRight">
                                <Link to="/resources">
                                    <Typography>Resources</Typography>
                                </Link>
                            </div>
                            <Typography variant="h4" align="center">WELCOME TO</Typography>
                                <div>
                                    <img className="center"
                                        src="/images/suits.jpg"
                                        alt="Suits for Hire Logo"
                                    />
                                </div>
                            <Typography align="center" variant="h5">OVERVIEW</Typography>
                            <Typography align="center">Register and make an appointment to be fitted with the perfect suit and additional resources</Typography>
                                <Button variant="outlined" color="inherit" onClick={this.goToInfo}>- SUIT UP -</Button>

                    </div>
                </Grid>
            </Grid>
        )
    }
};

export default connect(mapStateToProps)(LandingPage);
