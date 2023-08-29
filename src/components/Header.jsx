import logo_gold from "../assets/LogoGold.png";
import logo_black from "../assets/LogoBlack.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showHamburger = windowWidth <= 975;

    return (
        <div className="header">
            <div className="header-left">
                <div className="header-logo">
                    <img src={logo_gold} alt="logo_gold" />
                </div>
                <div className="header-links">
                    <span>Home</span>
                    <span>Programs</span>
                    <span>Testimonials</span>
                    <span>Contact Us</span>
                </div>
            </div>
            {!showHamburger && <div className="header-right">Become a Member</div>}
            {showHamburger && 
                <IconContext.Provider value={{className: "header-hamburger"}}>
                    <div><AiOutlineMenu /></div>
                </IconContext.Provider>
            }
      </div>
    );
};

export default Header;