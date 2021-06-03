import { useStyles } from '../styles';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from '../TabPanel';
import PropTypes from 'prop-types';
import { ListItems } from '../ListItems';
import { Tracker } from '../Tracker';

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const TabsBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Tracker' {...a11yProps(0)} />
                    <Tab label='List Items' {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Tracker/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ListItems/>
            </TabPanel>
        </div>
    );
}
