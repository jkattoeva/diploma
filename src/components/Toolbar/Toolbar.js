import Nav from "../Nav/Nav";
import NavToggle from "../Nav/NavToggle/navToggle";
import Logo from "../ui/Logo/Logo";
import classes from "./Toolbar.module.css";

function Toolbar({ toggledrawer}) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>
        <Logo />
        <Nav />
        <NavToggle callback={toggledrawer}/>
      </div>
    </nav>
  );
}

export default Toolbar;
