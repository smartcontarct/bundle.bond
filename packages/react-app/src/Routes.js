
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

// import About from "./pages/About";
import CreateTeamPage from "./pages/CreateTeamPage";
import TeamOwnerPage from "./pages/TeamOwnerPage";
//import AddAsset from "./pages/AddAsset";
import Home from "./pages/MainPage";
//import AdminPage from "./pages/AdminPage";
import history from './utils/history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/TeamOwnerPage" component={TeamOwnerPage} />
                    <Route path="/CreateTeamPage" component={CreateTeamPage} />
                    {/*<Route path="/AddAsset" component={AddAsset} />
                    <Route path="/AdminPage" component={AdminPage} /> */}
                </Switch>
            </Router>
        )
    }
}