//vitals
import { Router } from "express";

//controllers-person
import { CreatePersonsController } from "./persons/create/CreatePersonsController";
import { DeletePersonsController } from "./persons/delete/DeletePersonsController";
import { GetAllPersonController } from "./persons/get/GetAllPersonController";
import { GetByPersonController } from "./persons/get/GetByPersonController";
import { UpdatePersonsController } from "./persons/update/UpdatePersonsController";

//controllers-schedule
import { CreateSchedulingController } from "./scheduling/create/CreateSchedulingController";
import { DeleteSchedulingController } from "./scheduling/delete/DeleteSchedulingController";
import { GetAllSchedulingController } from "./scheduling/get/GetAllSchedulingController";
import { GetBySchedulingController } from "./scheduling/get/GetBySchedulingController";
import { UpdateSchedulingController } from "./scheduling/update/UpdateSchedulingController";

const routes = Router();

//object-person
const createPerson = new CreatePersonsController();
const deletePerson = new DeletePersonsController();
const getAllPerson = new GetAllPersonController();
const getByPerson = new GetByPersonController();
const updatePerson = new UpdatePersonsController();

//object-schedule
const createScheduling = new CreateSchedulingController();
const deleteScheduling = new DeleteSchedulingController();
const getAllScheduling = new GetAllSchedulingController();
const getByScheduling = new GetBySchedulingController();
const updateScheduling = new UpdateSchedulingController();

//router-person
routes.post('/person', createPerson.handle); 
routes.delete('/person/:id', deletePerson.handle);
routes.get('/person', getAllPerson.handle);
routes.get('/person/:id', getByPerson.handle);
routes.put('/person/:id', updatePerson.handle);

//router-schedule
routes.post('/schedule', createScheduling.handle);
routes.delete('/schedule/:id', deleteScheduling.handle);
routes.get('/schedule', getAllScheduling.handle);
routes.get('/schedule/:id', getByScheduling.handle)
routes.put('/schedule/:id', updateScheduling.handle);

export { routes }