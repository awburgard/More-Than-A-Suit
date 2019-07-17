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
        tabVal: 'job'
    }

    componentDidMount() {
        let need = this.props.store.setReview.need;
        // looping through the array of buttons
        const allTabVals = buttons.map((indvTab) => {
            return indvTab.value;
        });
        // if need is not null and the index of the button array does not equal -1 (which would be outside of the array)
        // set the tab to the value of the need
        if (need != null && allTabVals.indexOf(need.toLowerCase()) !== -1) {
            this.setState({
                tabVal: need.toLowerCase(),
            })
        // if need value is none of the above, set the tab to 'other'
        } else if (need != null) {
            this.setState({
                tabVal: 'other',
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