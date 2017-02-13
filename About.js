import React from "react";
import {Link} from "react-router";

var About=React.createClass({
    render:function(){
        return <div>
        <div>about</div>
        <div><Link to="app/repos">go to repos</Link></div>
        </div>
    }
});

export default About;