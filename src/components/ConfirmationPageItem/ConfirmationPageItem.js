import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import EditButton from '../EditButton/EditButton'
import ConfirmationPageInfo from '../ConfirmationPageInfo/ConfirmationPageInfo';
import InputField from '../InputField/InputField';

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
        if (this.state.editing) {
            conditionalElement = <InputField info={this.props.info} />
        } else {
            conditionalElement = <ConfirmationPageInfo info={this.props.info} />
        }
        return (
            <div>
                {conditionalElement}
                <EditButton editing={this.state.editing} toggleEdit={this.toggleEdit} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(ConfirmationPageItem);
