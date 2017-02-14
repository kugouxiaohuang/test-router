import React from "react";
import {Link} from "react-router";

var About=React.createClass({
    render:function(){
        return <div>
        <div><Link to="/repos">go to repos</Link></div>
        <div>about</div>
        <div><Link to="/about/add">go to add</Link></div>
        {this.props.children}
        </div>
    }
});

export default About;