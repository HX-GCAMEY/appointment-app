import {Request, Response} from "express";
import Appointment from "../entities/Appointment";

import {
  cancelAppointmentService,
  createAppointmentService,
  getAllAppointmentsService,
  getAppointmentByIdService,
} from "../services/appointmentsService";

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments: Appointment[] = await getAllAppointmentsService();
  res.status(200).json(appointments);
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const {appointmentId} = req.params;
  const appointment: Appointment | null = await getAppointmentByIdService(
    parseInt(appointmentId)
  );

  res.status(200).json(appointment);
};

export const schedule = async (req: Request, res: Response) => {
  const newAppointment = createAppointmentService(req.body);
  res.status(200).json(newAppointment);
};

export const cancel = async (req: Request, res: Response) => {
  try {
    const {appointmentId} = req.params;
    const appointment: Appointment | null = await cancelAppointmentService(
      Number(appointmentId)
    );
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({error: (error as any).message});
  }
};
