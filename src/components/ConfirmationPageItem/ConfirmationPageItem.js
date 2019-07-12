import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import EditButton from '../EditButton/EditButton'
import ConfirmationPageInfo from '../ConfirmationPageInfo/ConfirmationPageInfo';
import InputField from '../InputField/InputField';
import TwilioButton from '../TwilioButton/TwilioButton';
import {
    Paper,
    Box,
    Grid,
    Container,
} from '@material-ui/core/';

class ConfirmationPageItem extends Component {
    state = {
        editing: false,
    }

    toggleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })

    }

    render() {
        let conditionalElement;
        let confirmButton;
        if (this.state.editing) {
            conditionalElement = <InputField info={this.props.info} toggleEdit={this.toggleEdit} />
            confirmButton = null;
        } else {
            conditionalElement = <ConfirmationPageInfo info={this.props.info} />
            confirmButton =  <TwilioButton info={this.props.info} history={this.props.history}/>
        }

        return (
            <Container className="behindPaper" maxWidth='xs'>
                <Paper elevation={15}>
                <Box m={1} p={3}>
                    {conditionalElement}
                    <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                    <EditButton editing={this.state.editing} toggleEdit={this.toggleEdit} saveInfo={this.saveInfo} />
                    </Grid>
                    <Grid item xs={6} md={6}>
                    {confirmButton}
                    </Grid>
                    </Grid>
                </Box>
                </Paper>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(ConfirmationPageItem);
