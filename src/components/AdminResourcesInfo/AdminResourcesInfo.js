import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import AdminDeleteButton from '../AdminDeleteButton/AdminDeleteButton';
import AdminEditButton from '../AdminEditButton/AdminEditButton';
import { Grid, Typography } from '@material-ui/core';
import { withStyles, createStyles } from "@material-ui/core/styles";

const styles = (theme) => createStyles({
    caption: {
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.0rem'
        },
    },
    name: {
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.5rem'
        },
    },
});

class AdminResourcesInfo extends Component {
    render() {
        return (
            <Typography variant="caption" className={this.props.classes.caption}>
                <Grid container alignItems='center' alignContent='center' spacing={2} wrap="wrap">
                    <Grid item xs={12} sm={12} md={2} className={this.props.classes.name}>
                        {this.props.resources.title}
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                        <Typography variant="caption" className="showOnlyMobile" component='div'>Description:</Typography>
                        {this.props.resources.description}
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Typography variant="caption" className="showOnlyMobile" component='div'>Link:</Typography>
                        <span className="breakWord">{this.props.resources.link}</span>
                    </Grid>
                    <Grid item xs={12} sm={12} md={1}>
                        <Typography variant="caption" className="showOnlyMobile" component='div'>Category:</Typography>
                        {this.props.resources.category_name}
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <AdminEditButton editing={this.props.editing} toggleEdit={this.props.toggleEdit} saveInfo={this.props.saveInfo} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <AdminDeleteButton resources={this.props.resources} />
                    </Grid>
                </Grid>
            </Typography>
        )
    }
}
export default connect(mapStateToProps)(withStyles(styles)(AdminResourcesInfo));
