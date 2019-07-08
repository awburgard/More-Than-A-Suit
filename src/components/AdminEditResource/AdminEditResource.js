import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import NeedSelector from '../NeedSelector/NeedSelector';

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
        return (
            <div>
                Title: <input type="text" value={this.state.title} onChange={this.handleInputChangeFor('title')}></input><br />
                Description: <input type="text" value={this.state.description} onChange={this.handleInputChangeFor('description')}></input><br />
                Link: <input type="text" value={this.state.link} onChange={this.handleInputChangeFor('link')}></input> <br />
                Category: <NeedSelector onChange={this.handleInputChangeFor('category')} value={this.state.category}/>
                <button onClick={this.saveInfo}>Save</button>
            </div >
        )
    }
}

export default connect(mapStateToProps)(AdminEditResource);
