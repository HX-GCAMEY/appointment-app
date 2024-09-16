import AppointmentCard from "../AppointmentCard";
import styles from "./Appointments.module.css";

function Appoinments({appointments}) {
  return (
    <div className={styles.container}>
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
}

export default Appoinments;
