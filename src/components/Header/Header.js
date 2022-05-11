import Main from "../Main/Main";
import "./Header.css";

function Header({ image, title, children }) {
  return (
    <header className="Header">
      <Main image={image}/>
      <div className="lg">
        <section>
          <h1>{title}</h1>
          <p>{children}</p>
        </section>
      </div>
    </header>
  );
}

export default Header;
