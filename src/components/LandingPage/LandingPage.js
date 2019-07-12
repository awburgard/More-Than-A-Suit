import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


class LandingPage extends Component {
    goToInfo = (event) => {
        this.props.history.push('/info');
    }

    render() {
        return (
            <div>
                <div className="text_alnRight">
                    <Link to="/resources">
                        <Typography>Resources</Typography>
                    </Link>
                </div>
                <h1>WELCOME TO</h1>
                    <div>
                        <img className="center"
                            src="/images/suits.jpg"
                            alt="Suits for Hire Logo"
                        />
                    </div>
                <h3>OVERVIEW</h3>
                <p> Register and make an appointment to be fitted with the perfect suit and additional resources</p>
                <button className="centersuitbtn" onClick={this.goToInfo}>- SUIT UP -</button>
            </div>
        )
    }
};

export default connect(mapStateToProps)(LandingPage);
