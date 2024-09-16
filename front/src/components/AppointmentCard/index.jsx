import styles from "./AppointmentCard.module.css";

function AppointmentCard({appointment}) {
  const {date, time, status} = appointment;

  return (
    <div className={styles.container}>
      <div className={styles.data}>
        <div className={styles.text}>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
        </div>
        <span className={status === "active" ? styles.active : styles.canceled}>
          {status.toUpperCase()}
        </span>
      </div>
      {status === "active" && (
        <button className={styles.cancelButton}>Cancel</button>
      )}
    </div>
  );
}

export default AppointmentCard;
