import React from "react";
import {Link} from "react-router";
import {browserHistory} from "react-router";


var Home=React.createClass({
    handleClick:function(){
        browserHistory.push("#/app/repos");
    },
    render(){
        return <div><Link to="app" activeClassName="active" onlyActiveOnIndex={true}>back  home</Link><div onClick={this.handleClick}>点我</div>
            <ul>
                <li><Link to="app/repos" activeClassName="active">go to repos</Link></li>
                <li><Link to="app/about" activeClassName="active">go to about</Link></li>
            </ul>
        </div>
    }
});

export default Home;