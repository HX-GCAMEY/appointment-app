import Appoinments from "../../components/Appoinments";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useContext} from "react";
import {UserContext} from "../../context/user";

import styles from "./Profile.module.css";

function Profile() {
  const {id} = useParams();
  const navigate = useNavigate();
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
      <div className={styles.buttons}>
        {isLogged && <button onClick={logout}>Logout</button>}
        {isLogged && (
          <button
            onClick={() => {
              navigate("/profile/schedule");
            }}
          >
            Schedule
          </button>
        )}
      </div>
      {isLogged ? (
        appointments.length === 0 ? (
          <h1>No appointments</h1>
        ) : (
          <Appoinments appointments={appointments} />
        )
      ) : (
        <h1 className={styles.text}>Please login </h1>
      )}
    </div>
  );
}

export default Profile;
