import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import NeedSelector from '../NeedSelector/NeedSelector';
import { Button, Input, Typography } from '@material-ui/core';

class AdminEditResource extends Component {

    state = {
        title: this.props.resources.title,
        description: this.props.resources.description,
        link: this.props.resources.link,
        category: this.props.resources.categories_id,
    }

    saveInfo = () => {
        this.props.dispatch({
            type: 'PUT_RESOURCE',
            payload: {
                id: this.props.resources.resources_id,
                title: this.state.title,
                description: this.state.description,
                link: this.state.link,
                categories_id: this.state.category,
                prevCategoriesId: this.props.resources.categories_id,
            }
        })
        this.props.toggleEdit();
    }


    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    render() {
        console.log("ONE OF THESE THINGS IS NOT LIKE THE OTHER!", this.props.resources.categories_id );
        return (
            <div>
                Title: <Input type="text" value={this.state.title} onChange={this.handleInputChangeFor('title')}></Input>
                Description: <Input type="text" value={this.state.description} onChange={this.handleInputChangeFor('description')}></Input>
                Link: <Input type="text" value={this.state.link} onChange={this.handleInputChangeFor('link')}></Input>
                Category: <NeedSelector onChange={this.handleInputChangeFor('category')} value={this.state.category} />
                <Button variant="contained" color="primary" onClick={this.saveInfo}>Save</Button>
            </div >
        )
    }
}

export default connect(mapStateToProps)(AdminEditResource);
