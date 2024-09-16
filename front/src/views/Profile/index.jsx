import Appoinments from "../../components/Appoinments";
import {myAppointments} from "../../assets/data";
import {useState} from "react";

function Profile() {
  const [appointments, setAppointments] = useState(myAppointments);

  return (
    <div>
      <Appoinments appointments={appointments} />
    </div>
  );
}

export default Profile;
