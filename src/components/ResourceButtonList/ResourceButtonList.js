import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { Tabs, Tab } from '@material-ui/core';
import './resourceButtonList.css';

const buttons = [
    { name: 'Job', value: 'job' },
    { name: 'Funeral', value: 'funeral' },
    { name: 'Court', value: 'court' },
    { name: 'Other', value: 'other' },
]

class ResourcesButtonList extends Component {
    state = {
        tabVal: this.props.tabVal
    }

    componentDidMount() {
        const need = this.props.store.setReview.need;
        if (need != null) {
            this.setState({
                tabVal: need.toLowerCase(),
            })
        }
    }

    changeTab = (e, newValue) => {
        this.props.dispatch({
            type: 'GET_NEED_RESOURCES',
            payload: { categories_name: newValue }
        })
        this.setState({
            tabVal: newValue,
        })
    }

    render() {
        const tabList = buttons.map((tab, index) => {
            return <Tab value={tab.value} label={tab.name} key={index} />
        })

        return (
                <Tabs value={this.state.tabVal} onChange={this.changeTab} textColor="primary">
                    {tabList}
                </Tabs>
        )
    }
}

export default connect(mapStateToProps)(ResourcesButtonList);