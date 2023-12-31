import { Router } from "express";
import { CreateRemedioController } from "../modules/remedios/remedioCases/createRemedio/createRemedioController";
import { GetRemedioController } from "../modules/remedios/remedioCases/getRemedio/getRemedioController";
import { GetRemedioByIdPacController } from "../modules/remedios/remedioCases/getRemedioByIdPac/getRemedioByIdPacController";

import { Request, Response } from "express";
const remediosRoutes = Router();

const createRemedioController = new CreateRemedioController();
const getRemedioController = new GetRemedioController();
const getRemedioByIdPacController = new GetRemedioByIdPacController();

// Cadastro Remedio 
remediosRoutes.post("/cad", createRemedioController.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
})

// Listar remedios
remediosRoutes.get("/list", getRemedioController.handle);

// Listar remedios por id do paciente
remediosRoutes.get("/listId/:pacienteId", getRemedioByIdPacController.handle);

export { remediosRoutes }