import {Link} from "react-router-dom";
import {UserContext} from "../../context/user";
import {useContext} from "react";
import logo from "../../assets/barber-logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  const {isLogged, user} = useContext(UserContext);

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoSection}>
        <img src={logo} />
      </div>
      <div className={styles.linksSection}>
        <Link to="/">HOME</Link>
        {isLogged && <Link to={`profile/${user.id}`}>PROFILE</Link>}
        {!isLogged && <Link to="/login">LOGIN</Link>}
        {!isLogged && <Link to="/register">REGISTER</Link>}
      </div>
    </div>
  );
}

export default Navbar;
