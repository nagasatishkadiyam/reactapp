import { createContext } from "react";

//creating the context to store the data.

const UserContext = createContext({
    loggedinUser : "no user"
});

export default UserContext;