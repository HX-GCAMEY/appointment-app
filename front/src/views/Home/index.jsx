import Services from "../../components/Services";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Please Login to check your Appointments</h1>
      <Services />
    </div>
  );
}

export default Home;
