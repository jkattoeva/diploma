import classes from "./Footer.module.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import pinterest from "../../assets/pinterest.svg";
import twitter from "../../assets/twitter.svg";

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <ul className={classes.icons}>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={instagram} alt="facebook" />
          </li>
          <li>
            <img src={pinterest} alt="facebook" />
          </li>
          <li>
            <img src={twitter} alt="facebook" />
          </li>
        </ul>
        <div>
          {" "}
          <ul className={classes.section}>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Get Products</li>
            <li>About Us</li>
          </ul>
        </div>
        <p>@2022 FARFETCH All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
