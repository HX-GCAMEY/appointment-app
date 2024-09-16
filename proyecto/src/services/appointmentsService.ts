import {appointmentModel} from "../config/dataSource";
import {CreateAppointmentDto} from "../dtos/CreateAppointmentDto";
import Appointment from "../entities/Appointment";
import User from "../entities/User";
import {getUserByIdService} from "./usersService";

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  return await appointmentModel.find();
};

export const getAppointmentByIdService = async (
  id: number
): Promise<Appointment | null> => {
  const appointment = await appointmentModel.findOneBy({id});

  if (!appointment) {
    throw new Error("Appointment not found");
  }

  return appointment;
};

export const createAppointmentService = async (
  appointment: CreateAppointmentDto
): Promise<Appointment> => {
  const newAppointment: Appointment = await appointmentModel.create(
    appointment
  );
  await appointmentModel.save(newAppointment);

  const userFound: User | null = await getUserByIdService(appointment.userId);
  if (!userFound) {
    throw new Error("User not found");
  }

  newAppointment.user = userFound;
  await appointmentModel.save(newAppointment);

  return newAppointment;
};

export const cancelAppointmentService = async (
  appointmentId: number
): Promise<Appointment | null> => {
  const appointment: Appointment | null = await appointmentModel.findOneBy({
    id: appointmentId,
  });

  if (!appointment) {
    throw new Error("Appointment not found");
  }
  appointment.status = "cancelled";
  await appointmentModel.save(appointment);
  return appointment;
};
