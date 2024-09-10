import {Router} from "express";
import {
  cancel,
  schedule,
  getAllAppointments,
  getAppointmentById,
} from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.post("/schedule", schedule);
appointmentsRouter.put("/cancel/:AppointmentId", cancel);
appointmentsRouter.get("/:appointmentId", getAppointmentById);

export default appointmentsRouter;
