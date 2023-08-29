import logo_gold from "../assets/LogoGold.png";
import logo_black from "../assets/LogoBlack.png";

const Header = () => {
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
        <div className="header-right">Become a Member</div>
    </div>
  );
};

export default Header;