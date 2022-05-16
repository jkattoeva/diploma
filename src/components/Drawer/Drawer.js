import Nav from "../Nav/Nav";
import Logo from "../ui/Logo/Logo";
import classes from "./Drawer.module.css";


function Drawer({ open, toggle }) {
  const classNames = [classes.Drawer];
  if (open) {
    classNames.push(classes.open);
  }


  return (
    <div onClick={toggle} className={classNames.join(" ")}>
      <div className={classes.backdrop}></div>
      <div className={classes.content}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Drawer;