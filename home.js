import React from "react";
import {Link,IndexLink} from "react-router";
import {browserHistory} from "react-router";


var Home=React.createClass({
    handleClick:function(){
        browserHistory.push("/repos");
    },
    render(){
        return <div><IndexLink to="/" activeClassName="active">back  home</IndexLink><div onClick={this.handleClick}>点我去repos</div>
            <ul> 
                <li><Link to="/repos" activeClassName="active">go to repos</Link></li>
                <li><Link to="/about" activeClassName="active">go to about</Link></li>
            </ul>
        </div>
    }
});

export default Home;