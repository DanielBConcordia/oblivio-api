import { Router } from "express";
import { CreateCuidadorController } from "../modules/cuidadores/cuidadorCases/createCuidador/createCuidadorController";
import { GetCuidadorController } from "../modules/cuidadores/cuidadorCases/getCuidadorCase/getCuidadorController";
const cuidadorRoutes = Router();

const createUserController = new CreateCuidadorController();
const getCuidador = new GetCuidadorController

cuidadorRoutes.post("/cad", createUserController.handle);
cuidadorRoutes.get("/list", getCuidador.handle);

export { cuidadorRoutes };