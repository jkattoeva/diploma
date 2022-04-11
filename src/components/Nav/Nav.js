import "./Nav.css";
import Logo from "../ui/Logo/Logo"

function Nav () {
  return (
    <nav className="Nav">
      <ul className="FirstUl">
        <li><a href="/">Women</a></li>
        <li><a href="/">Men</a></li>
        <li><a href="/">Teenagers</a></li>
        <li><a href="/">Kids</a></li>
      </ul>
      <Logo />
        <ul className="LastUl">
          <li><a href="/">Sign up</a></li>
          <li><a href="/">Instagram</a></li>
        </ul>
    </nav>
  );
};

export default Nav;