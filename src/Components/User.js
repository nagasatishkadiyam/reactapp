const User = (props) => {
    const {name, city} = props;
    return (
        <div className="about">
            <h1>{name}</h1>
            <h2>{city}</h2>
        </div>
    );
}

export default User;