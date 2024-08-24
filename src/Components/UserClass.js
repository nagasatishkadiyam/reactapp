// import React from "react";
import {Component} from "react";

// class UserClass extends React.Component
class UserClass extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            count2: 2
        }
        
        console.log(this.props.name + 'child const');
    }

    componentDidMount(){
        console.log(this.props.name  + 'component did mount');
    }

    render() {
        console.log(this.props.name +  'component render');
        const {name, city} = this.props;
        const {count, count2} = this.state;
        return (
            <div className="about">
                <h1>{name}</h1>
                <h2>{city}</h2>
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