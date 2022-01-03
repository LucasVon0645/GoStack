import { Router } from "express";
import { parseISO } from "date-fns";

import AppointmentsController from "../controllers/AppointmentsController";

import CreateAppointmentService from "@modules/appointments/services/CreateAppointmentService";

import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";
import { container } from "tsyringe";

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();


appointmentsRouter.use(ensureAuthenticated);

/* appointmentsRouter.get("/", async (_request, response) => {
	const appointmentsRepository = getCustomRepository(AppointmentsRepository);
	const appointments = await appointmentsRepository.find();
	return response.json(appointments);
}); */

appointmentsRouter.post("/", appointmentsController.create);

export default appointmentsRouter;
