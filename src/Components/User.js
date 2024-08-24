import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(2);
    const {name, city} = props;
    return (
        <div className="about">
            <h1>{name}</h1>
            <h2>{city}</h2>
            <h2>count: {count}</h2>
            <h2>count2: {count2}</h2>
        </div>
    );
}

export default User;