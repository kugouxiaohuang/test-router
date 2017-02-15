import {Router,Route,hashHistory,IndexRoute,browserHistory,Redirect} from "react-router";
import React from "react";
import {render} from "react-dom";
import App from "./App.js";
import Repos from "./Repos.js";
import About from "./About.js";
import Add from "./Add.js";
import Home from "./home.js";
const requireAuth=(nextState,replace)=>{
    if(true){
        replace({pathname:"/"})
    }
}
render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="repos" component={Repos} />
                <Route path="about(/:name/:repo)" component={About}>
                    <Route path="add" onEnter={
                        requireAuth} />
                </Route>
            </Route>
        </Router>,
        document.getElementById("app")
    )
