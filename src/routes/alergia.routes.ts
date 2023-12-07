import { Router } from "express";
import { CreateAlergiaController } from "../modules/alergia/alergiaCase/createAlergiaCase/createAlergiaController";
import { GetAlergiaController } from "../modules/alergia/alergiaCase/getAlergiaCase/getAlergiaController";
import { GetAlergiaByIdPacController } from "../modules/alergia/alergiaCase/getAlergiaByIdPacCase/getAlergiaByIdPacController";

import { Request, Response } from "express";
const alergiaRoutes = Router();

const createAlergia = new CreateAlergiaController();
const getAlergia = new GetAlergiaController();
const getAlergiaByIdPac = new GetAlergiaByIdPacController();

// Cadastrar alergia
alergiaRoutes.post('/cad', createAlergia.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
});

// Listar alergia
alergiaRoutes.get('/list', getAlergia.handle);

// Listaar alergia pelo paciente
alergiaRoutes.get('/listId/:pacienteId', getAlergiaByIdPac.handle);

export { alergiaRoutes }