import React from "react";
import {Link} from "react-router";
import {browserHistory} from "react-router";

var Repos=React.createClass({
    // handleSubmit(event){
    //     event.preventDefault();
    //     const userName=event.target.elements[0].value;
    //     const repo=event.target.elements[1].value;
    //     const path=`/about/${userName}/${repo}`;
    //     browserHistory.push(path);
    // },
    contextTypes:{
        router:React.PropTypes.object
    },
    handleSubmit(event){
        event.preventDefault();
        const userName=event.target.elements[0].value;
        const repo=event.target.elements[1].value;
        const path=`/about/${userName}/${repo}`;
        this.context.router.push(path);
    },
    render(){
        return <div><div>repos</div>
        <div><Link to="/about">go to about</Link></div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="repo" />
            <button type="submit">提交</button>
        </form>
        </div>
    }
});

export default Repos;