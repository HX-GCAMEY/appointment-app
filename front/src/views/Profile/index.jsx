import Appoinments from "../../components/Appoinments";
import {useParams} from "react-router-dom";
import {useEffect, useContext} from "react";
import {UserContext} from "../../context/user";

import styles from "./Profile.module.css";

function Profile() {
  const {id} = useParams();
  const {appointments, getAppointments, isLogged, logout} =
    useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      await getAppointments(id);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {isLogged ? (
        appointments.length === 0 ? (
          <h1>No appointments</h1>
        ) : (
          <Appoinments appointments={appointments} />
        )
      ) : (
        <h1 className={styles.text}>Please login </h1>
      )}
      {isLogged && <button onClick={logout}>Logout</button>}
    </div>
  );
}

export default Profile;
