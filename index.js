import {Router,Route,hashHistory,IndexRoute} from "react-router";
import React from "react";
import {render} from "react-dom";
import App from "./App.js";
import Repos from "./Repos.js";
import About from "./About.js";
import Home from "./home.js";
let routes= <Route path="app" component={App}>
        <Route path="repos" component={Repos} />
        <Route path="about" component={About} />
    </Route>;
render(
        <Router routes={routes} history={hashHistory} />,
        document.getElementById("app")
    )
