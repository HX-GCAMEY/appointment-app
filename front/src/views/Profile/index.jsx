import Appoinments from "../../components/Appoinments";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Profile() {
  const {id} = useParams();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((response) => {
      setAppointments(response.data.appointments);
    });
  }, [id]);

  return (
    <div>
      <Appoinments appointments={appointments} />
    </div>
  );
}

export default Profile;
