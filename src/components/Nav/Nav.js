import "./Nav.css";
function Nav () {
  return (
    <nav className="Nav">
      <ul className="FirstUl">
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Teenagers</a></li>
        <li><a href="#">Kids</a></li>
      </ul>
      <div className="Logo">
          Kelton
        </div>
        <ul className="LastUl">
          <li><a href="#">Sign up</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
    </nav>
  );
};

export default Nav;