import './App.css';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {compose} from "redux";
import {connect} from "react-redux";

const enhancer = compose(
    connect(({ users }) => ({
        users
    }), {})
);

export const App = enhancer( () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Dashboard }/>
            </Switch>
        </BrowserRouter>
    );
})
