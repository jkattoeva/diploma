import "./Section.css"
import image from "../../assets/homePageImage.jpg"


function Header() {
  return (
  <>
  <div className="row">
    <div className="first">
      <h1>VEGAN, ETHICAL AND SUSTAINABLE</h1>
      <p>Hand-made with love by our family fun factory in Portugal using over 95% recycled materials (we’re aiming for 100%)</p>
    </div>
    <div className="first">
      <h1>VEGAN, ETHICAL AND SUSTAINABLE</h1>
      <p>Hand-made with love by our family fun factory in Portugal using over 95% recycled materials (we’re aiming for 100%)</p>
    </div>
    <div className="first">
      <h1>VEGAN, ETHICAL AND SUSTAINABLE</h1>
      <p>Hand-made with love by our family fun factory in Portugal using over 95% recycled materials (we’re aiming for 100%)</p>
    </div>
  </div>
    <div className="Section">
    <img src={image} alt="img"/>
    <div className="Text">
      <h1>The Weekend Boot</h1>
      <p>Socially and Environmentally Progressive</p>
      <button className="Button">See all Products</button>
    </div>
    </div>
  </>
  );
}

export default Header;
