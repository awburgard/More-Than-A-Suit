import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import NeedSelector from '../NeedSelector/NeedSelector';
import { Button, Input, Typography, Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';

class AdminAddResource extends Component {
    state = {
        title: '',
        description: '',
        link: '',
        category: 'default',
    }

    addResource = () => {
        this.props.dispatch({
            type: 'ADD_RESOURCE',
            payload: {
                title: this.state.title,
                description: this.state.description,
                link: this.state.link,
                category: this.state.category,
            }
        })
        this.props.toggleAdd();
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    render() {
        return (
            <Dialog maxWidth={"md"} open={this.props.show} onClose={this.props.handleClose}>
                <DialogContent>
                    <DialogTitle id="simple-dialog-title">
                        <Typography align="center"> Add Resource</Typography>
                    </DialogTitle>
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <Input fullWidth={true} placeholder="title" type="text" value={this.state.title} onChange={this.handleInputChangeFor('title')}></Input>
                        </Grid>
                        <Grid item xs={12}>
                            <Input fullWidth={true} placeholder="description" type="text" value={this.state.description} onChange={this.handleInputChangeFor('description')}></Input>
                        </Grid>
                        <Grid item xs={12}>
                            <Input fullWidth={true} placeholder="link" type="text" value={this.state.link} onChange={this.handleInputChangeFor('link')}></Input>
                        </Grid>
                        <Grid item xs={12}>
                            <NeedSelector onChange={this.handleInputChangeFor('category')} value={this.state.category} />
                        </Grid>
                        <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={this.addResource}>Add Resource</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        );
    }
}

export default connect(mapStateToProps)(AdminAddResource);
