import Appoinments from "../../components/Appoinments";
import {useEffect, useState} from "react";
import axios from "axios";

function Profile() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/appointments").then((response) => {
      setAppointments(response.data);
    });
  }, []);

  return (
    <div>
      <Appoinments appointments={appointments} />
    </div>
  );
}

export default Profile;
