import React from "react";
import {Link} from "react-router";

var Add=React.createClass({
    render:function(){
        return <div>
        <div>add</div>
        <div><Link to="/about">go to about</Link></div>
        </div>
    }
});

export default Add;