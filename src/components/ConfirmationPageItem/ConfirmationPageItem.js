import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import EditButton from '../EditButton/EditButton'
import ConfirmationPageInfo from '../ConfirmationPageInfo/ConfirmationPageInfo';
import InputField from '../InputField/InputField';
import TwilioButton from '../TwilioButton/TwilioButton';

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
            conditionalElement = <InputField info={this.props.info} toggleEdit={this.toggleEdit} />
        } else {
            conditionalElement = <ConfirmationPageInfo info={this.props.info} />
        }
        return (
            <div>
                {conditionalElement}
                <EditButton editing={this.state.editing} toggleEdit={this.toggleEdit} saveInfo={this.saveInfo} />
                <TwilioButton info={this.props.info}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ConfirmationPageItem);
