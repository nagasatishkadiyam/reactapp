// import React from "react";
import {Component} from "react";
import Shimmer from "./Shimmer";

// class UserClass extends React.Component
class UserClass extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            count2: 2,
            userInfo: null,
        }
        
        // console.log(this.props.name + 'child const');
    }

    async componentDidMount(){
        // console.log(this.props.name  + 'component did mount');
        const data = await fetch("https://api.github.com/users/nagasatishkadiyam");
        const json = await data.json();
        this.setState({
            userInfo : json,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.count !== prevState.count ||  this.state.count2 !== prevState.count2) {
            // console.log('component did update will be called after render in the updating stage');
        }
    }

    componentWillUnmount(){
        // this will be called when are leaving the cuerrent page.
        // console.log("componentwillunmount will be called as soon as you going to different page(while changing to different menu)");
    }

    render() {
        // console.log(this.props.name +  'component render');
        // object destructring
        const {name, city} = this.props;
        const {count, count2, userInfo} = this.state;


        if (userInfo === null) {
            return <Shimmer></Shimmer>;
        }

        return (
            <div className="about">
                <h1>{userInfo?.name}</h1>
                <h2>{userInfo?.login}</h2>
                <h2>{userInfo?.location}</h2>
                <img alt="not found" src={userInfo?.avatar_url} ></img>

                <h2>count : {count}</h2>
                <h2>count2 : {count2}</h2>
                <button onClick={() => {
                    this.setState({
                        count : count + 1,
                        count2 : count2 + 1,
                    });                    
                }}> Increase count </button>
            </div>
        );
    };
}

export default UserClass;