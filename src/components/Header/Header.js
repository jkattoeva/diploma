import "./Header.css";

function Header({ image, title, children }) {
  return (
    <header className="Header container">
      <img src={image} alt="headerImage"/>
      <div className="description">
        <section>
          <h1>{title}</h1>
          <p>{children}</p>
        </section>
      </div>
    </header>
  );
}

export default Header;
