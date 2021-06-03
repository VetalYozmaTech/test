import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DetailPage } from './DetailPage';
import { TabsBar } from './TabsBar';

export const Dashboard = () => {
    return (
        <Switch>
            <Route exact path='/list' component={TabsBar}/>
            <Route path='/list/:id' component={DetailPage}/>
            <Redirect from="/" to="/list" />
        </Switch>
    )
}
