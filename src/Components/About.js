import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About page</h1>
            <User name={"satish"} city={"city from functional component"}></User>
            <UserClass name={"satish"} city={"city from class component"} />
        </div>
    );
}

export default About;