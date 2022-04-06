import "./Header.css";
import headerImage from "../../assets/shop2.jpg";
function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

  return (
    <header className="Header" style={style}>
      <h1>The best online store of shoe collections in KG</h1>
      <div className="List">
      <ul>
        <li>High quality</li>
        <li>Max comfort</li>
        <li>Extraordinary style</li>
      </ul>
      <ul>
        <li>More lightness</li>
        <li>Big choices</li>
        <li>Low price</li>
      </ul>
      </div>
    </header>
  );
};

export default Header;