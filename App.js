import React from "react";
import Home from "./home.js";

var App=React.createClass({
    render(){
        return <div>
            <Home />
            {this.props.children}
        </div>
    }
});

export default App;