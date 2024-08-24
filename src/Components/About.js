import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// functional component.
// const About = () => {
//     return (
//         <div>
//             <h1>About page</h1>
//             <User name={"satish"} city={"city from functional component"}></User>
//             <UserClass name={"satish"} city={"city from class component"} />
//         </div>
//     );
// }


// class based component.


class About extends React.Component {

    constructor(props){
        super(props);
        console.log('parent const');
    }

    componentDidMount() {
        console.log('parent component did mount');
    }

    render(){
        console.log('parent render');
        return (
            <div>
                <h1>About page</h1>
                <UserClass name={"first"} city={"city from class component"} />
                <UserClass name={"second"} city={"city from class component"} />
            </div>
        );

    };
}
export default About;

// class based componecnts life cyclce.
/**
 * parent constrctor 
 * parnet render
 *  - first child constructor
 *  - first child render
 * 
 *  - second child constructor.
 *  - second child render.
 *  - first child componentdid mount.
 *  - second child componentdid mount.
 */