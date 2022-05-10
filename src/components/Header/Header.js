import "./Header.css";

function Header( { image, video, title, children}) {
  return (
    <header className="Header">
      <img src={image} alt="img" />
      <div className="lg">
      <section>
        <h1>{title}</h1>
        <p>{children}</p>
      </section>
      </div>
    </header>
  );
};

export default Header;