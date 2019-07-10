import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



class LandingPage extends Component {
    goToInfo = (event) => {
        this.props.history.push('/info');
    }

    render() {
        return (
            <div>
                <Typography variant="h2" component="h2" gutterBottom>WELCOME TO</Typography>>
                    <div>
                        <img className="center"
                            src="/images/suits.jpg"
                            alt="Suits for Hire Logo"
                        />
                    </div>
                <Typography variant="h4" gutterBottom>OVERVIEW</Typography>
                <Typography variant="body1" gutterBottom> Register and make an appointment to be fitted with the perfect suit and additional resources</Typography>
                <Button onClick={this.goToInfo}>- SUIT UP -</Button>
            </div>
        )
    }
};

export default connect(mapStateToProps)(LandingPage);
