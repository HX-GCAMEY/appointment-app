import {Appointment} from "../interfaces/Appointment";
import {Status} from "../interfaces/Appointment";
import {getUserByIdService} from "./usersService";

export const appointments: Appointment[] = [
  {
    id: 1,
    date: "2021-10-10",
    time: "10:00",
    status: Status.ACTIVE,
    user: 1,
  },
];

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  return await appointments;
};

export const getAppointmentByIdService = async (
  id: number
): Promise<Appointment | undefined> => {
  const appointment = appointments.find((appointment) => appointment.id === id);

  return await appointment;
};

export const createAppointmentService = async (
  appointment: any
): Promise<Appointment> => {
  const {user} = appointment;
  let newAppointment;

  const userExist = await getUserByIdService(user);

  if (userExist) {
    newAppointment = {
      id: appointments.length + 1,
      status: Status.ACTIVE,
      user: userExist.id,
      ...appointment,
    };
    appointments.push(newAppointment);
  }

  return await newAppointment;
};

export const cancelAppointmentService = async (
  appointmentId: number
): Promise<Appointment | undefined> => {
  const appointment = appointments.find(
    (appointment) => appointment.id === appointmentId
  );
  if (appointment) {
    appointment.status = Status.CANCELLED;
  }
  return await appointment;
};
