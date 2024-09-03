import { LOGO_IMG } from "../Utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";


    // header component 
    const Header = () => {

        const [btnvalue, setbtnvalue] = useState("Login");
        const online = useOnlineStatus();

        // useContext is a hook coming from the react.
        // {loggedinUser} is object destructing.
        const {loggedinUser} = useContext(UserContext);

        return (
            <div className="flex justify-between shadow-lg bg-pink-100 m-2">
                <div className="logo">
                    <img className="w-56" src={LOGO_IMG} alt="image not found" /> 
                </div>
                <div className="nav-items flex items-center">
                    <ul className="flex m-4 p-4">
                        <li className="px-4">online state : {online ? 'online' : 'offline'}</li>
                        <li className="px-4"><Link to="/">Home</Link></li>
                        <li className="px-4"><Link to="contact">Contact Us</Link></li>
                        <li className="px-4"><Link to="about">About Us</Link></li>
                        <li className="px-4"><Link to="grocery">Grocery</Link></li>
                        <li className="px-4">Cart</li>
                        <button className="login-button" onClick={ () => {
                            (btnvalue == 'Login') ? setbtnvalue("Logout") : setbtnvalue("Login");
                        }}>{btnvalue}</button>
                        <li className="px-4 font-bold"> {loggedinUser} </li>
                    </ul>
                </div>
            </div>
        );
    }; 

    export default Header;