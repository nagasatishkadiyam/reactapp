import { LOGO_IMG } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

    // header component 
    const Header = () => {

        const [btnvalue, setbtnvalue] = useState("Login");
        return (
            <div className="header">
                <div className="logo">
                <img className="logoimage"src={LOGO_IMG} alt="image not found" /> 
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="contact">Contact Us</Link></li>
                        <li><Link to="about">About Us</Link></li>
                        <li>Cart</li>
                        <button className="login-button" onClick={ () => {
                            (btnvalue == 'Login') ? setbtnvalue("Logout") : setbtnvalue("Login");
                        }}>{btnvalue}</button>
                    </ul>
                </div>
            </div>
        );
    }; 

    export default Header;