import {Request, Response} from "express";
import {Appoinment} from "../interfaces/Appoinment";

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments: Appoinment[] = [];
  res.status(200).json(appointments);
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const {appointmentId} = req.params;
  const appointment: Appoinment | undefined = undefined;

  res.status(200).json(appointment);
};

export const schedule = async (req: Request, res: Response) => {
  const {date, time, user} = req.body;
  const newAppointment = {date, time, user};
  res.status(200).json(newAppointment);
};

export const cancel = async (req: Request, res: Response) => {
  const {appointmentId} = req.params;
  const appointment: Appoinment | undefined = undefined;
  res.status(200).json(appointment);
};
