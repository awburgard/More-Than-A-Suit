import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import NeedSelector from '../NeedSelector/NeedSelector';

class AdminAddResource extends Component {
    state = {
        title: '',
        description: '',
        link: '',
        category: '',
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
            <div>
                <input placeholder="title" type="text" value={this.state.title} onChange={this.handleInputChangeFor('title')}></input>
                <input placeholder="description" type="text" value={this.state.description} onChange={this.handleInputChangeFor('description')}></input>
                <input placeholder="link" type="text" value={this.state.link} onChange={this.handleInputChangeFor('link')}></input>
                <NeedSelector onChange={this.handleInputChangeFor('category')}/>
                <button onClick={this.addResource}>Add Resource</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AdminAddResource);
