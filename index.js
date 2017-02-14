import {Router,Route,hashHistory,IndexRoute,browserHistory} from "react-router";
import React from "react";
import {render} from "react-dom";
import App from "./App.js";
import Repos from "./Repos.js";
import About from "./About.js";
import Add from "./Add.js";
import Home from "./home.js";
render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="repos" component={Repos} />
                <Route path="about" component={About}>
                    <Route path="add" component={Add} />
                </Route>
            </Route>
        </Router>,
        document.getElementById("app")
    )
