class UserClass extends React.Component
{

    constructor(props) {
        super(props);
    }

    render() {
        const {name, city} = this.props;
        return (
            <div className="about">
                <h1>{name}</h1>
                <h2>{city}</h2>
            </div>
        );
    };
}

export default UserClass;