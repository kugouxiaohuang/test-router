import React from "react";
import {Link} from "react-router";

var Repos=React.createClass({
    render:function(){
        return <div><div>repos</div>
        <div><Link to="app/about">go to about</Link></div>
        </div>
    }
});

export default Repos;