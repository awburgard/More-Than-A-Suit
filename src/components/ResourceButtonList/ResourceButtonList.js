import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ResourcesButtonItem from '../ResourcesButtonItem/ResourcesButtonItem';

const buttons = [
    { name: 'Job', value: 'job' },
    { name: 'Funeral', value: 'funeral' },
    { name: 'Wedding', value: 'wedding' },
]


class ResourcesButtonList extends Component {
    render() {
        const buttonList = buttons.map((button, index) => {
            return <ResourcesButtonItem key={index} name={button.name} value={button.value} />
        })

        return (
            <div>
                {buttonList}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ResourcesButtonList);