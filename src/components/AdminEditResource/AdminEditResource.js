import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class AdminEditResource extends Component {

    state = {
        title: this.props.resources.title,
        description: this.props.resources.description,
        link: this.props.resources.link,
    }

    saveInfo = () => {
        console.table('YERP: ', this.props);
        this.props.dispatch({
            type: 'PUT_RESOURCE',
            payload: {
                id: this.props.resources.id,
                title: this.state.title,
                description: this.state.description,
                link: this.state.link,
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
                <button onClick={this.saveInfo}>Save</button>
            </div >
        )
    }
}

export default connect(mapStateToProps)(AdminEditResource);
