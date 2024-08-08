import { LOGO_IMG } from "../Utils/constants";

    // header component 
    const Header = () => {
        return (
            <div className="header">
                <div className="logo">
                <img className="logoimage"src={LOGO_IMG} alt="image not found" /> 
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        );
    }; 

    export default Header;