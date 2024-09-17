import styles from "./AppointmentCard.module.css";
import {UserContext} from "../../context/user";
import {useContext} from "react";

function AppointmentCard({appointment}) {
  const {cancelAppointments} = useContext(UserContext);

  const {id, date, time, status} = appointment;

  const handleCancel = () => {
    cancelAppointments(id);
  };

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
        <button onClick={handleCancel} className={styles.cancelButton}>
          Cancel
        </button>
      )}
    </div>
  );
}

export default AppointmentCard;
