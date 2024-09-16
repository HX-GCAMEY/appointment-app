import logo from "../../assets/barber-logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoSection}>
        <img src={logo} />
      </div>
      <ul className={styles.linksSection}>
        <li>HOME</li>
        <li>PROFILE</li>

        <li>LOGIN</li>
      </ul>
    </div>
  );
}

export default Navbar;
