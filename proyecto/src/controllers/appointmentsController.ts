import {Request, Response} from "express";
import {Appointment} from "../interfaces/Appointment";
import {
  cancelAppointmentService,
  getAppointmentByIdService,
} from "../services/appointmentsService";

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments: Appointment[] = [];
  res.status(200).json(appointments);
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const {appointmentId} = req.params;
  const appointment: Appointment | undefined = await getAppointmentByIdService(
    parseInt(appointmentId)
  );

  res.status(200).json(appointment);
};

export const schedule = async (req: Request, res: Response) => {
  const {date, time, user} = req.body;
  const newAppointment = {date, time, user};
  res.status(200).json(newAppointment);
};

export const cancel = async (req: Request, res: Response) => {
  const {appointmentId} = req.params;
  const appointment: Appointment | undefined = await cancelAppointmentService(
    Number(appointmentId)
  );
  res.status(200).json(appointment);
};
