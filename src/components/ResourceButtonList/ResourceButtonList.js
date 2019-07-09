import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ResourcesButtonItem from '../ResourcesButtonItem/ResourcesButtonItem';
import { Grid } from '@material-ui/core';

const buttons = [
    { name: 'Job', value: 'job' },
    { name: 'Funeral', value: 'funeral' },
    { name: 'Court', value: 'court' },
    { name: 'Other', value: 'other' },
]

class ResourcesButtonList extends Component {
    render() {
        const buttonList = buttons.map((button, index) => {
            return <Grid item xs={3} md='auto' alignItems="center" className="text_alnCenter">
                <ResourcesButtonItem key={index} name={button.name} value={button.value} />
            </Grid>
        })

        return (
            <Grid container spacing={2} justify="space-between">
                {buttonList}
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(ResourcesButtonList);