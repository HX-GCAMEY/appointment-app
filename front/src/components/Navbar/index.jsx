import {Link} from "react-router-dom";
import logo from "../../assets/barber-logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoSection}>
        <img src={logo} />
      </div>
      <div className={styles.linksSection}>
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">REGISTER</Link>
      </div>
    </div>
  );
}

export default Navbar;
