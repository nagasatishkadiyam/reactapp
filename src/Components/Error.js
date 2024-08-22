import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    // useRouteError is the hook created from react-router-dom package, it will provide the error details.

    return (
        <div >
            <h1>OOPS!! Something went wrong</h1>
            <h2>{error.status} : {error.statusText} </h2>
        </div>
    );
}

export default Error;