import Services from "../../components/Services";
import {UserContext} from "../../context/user";
import {useContext} from "react";
import styles from "./Home.module.css";

function Home() {
  const {isLogged, user} = useContext(UserContext);
  return (
    <div className={styles.container}>
      {isLogged ? (
        <h1>Welcome {user.name}</h1>
      ) : (
        <h1>Login to view your appointments</h1>
      )}

      <Services />
    </div>
  );
}

export default Home;
