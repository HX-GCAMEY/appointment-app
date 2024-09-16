import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Haircuts</h1>
        <p>
          Our barbers are trained in classic and modern haircuts. We can do
          anything from a simple trim to a full fade.
        </p>
      </div>
      <div className={styles.card}>
        <h1>Beard & Mustache Trim</h1>
        <p>
          Our barbers are trained in classic and modern beard and mustache
          trims. We can do anything from a simple trim to a full fade.
        </p>
      </div>
      <div className={styles.card}>
        <h1>Straight Razor Shave</h1>
        <p>
          Our barbers are trained in classic and modern straight razor shaves.
          We can do anything from a simple trim to a full shave.
        </p>
      </div>
      <div className={styles.card}>
        <h1>Sacalp & Facial Massage</h1>
        <p>
          Our barbers are trained in classic and modern sacalp and facial
          massages. We can do anything from a simple massage to a full facial.
        </p>
      </div>
    </div>
  );
}

export default Services;
