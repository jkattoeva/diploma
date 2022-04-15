import "./Header.css";
import headerImage from "../../assets/shoe5.jpg";
import logo from "../../assets/shop.jpg";
function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };


  return (
    <header className="Header" style={style}>
      <div className="lg">
      <h1> <span className="first">The best</span> <br/> <span className="second">online store of </span><br/><span className="third">shoe collections in KG</span></h1>
      <div>
        <img src={logo} alt="logo" />
      </div>
      </div>
    </header>
  );
};

export default Header;