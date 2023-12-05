import { Router } from "express";
import { CreateCaregiverPacController } from "../modules/caregiverpac/caregiverpacCases/createCaregiverPacCase/createCaregiverPacController";
import { GetCaregiverController } from "../modules/caregiverpac/caregiverpacCases/getCaregiverCase/getCaregiverPacController";
import { GetCaregiverByPatientController } from "../modules/caregiverpac/caregiverByPatientCase/getCaregiverByPatientController";

import { Request, Response } from "express";
const caregiverpacsRoutes = Router();

const createCaregiverPacs = new CreateCaregiverPacController();
const getCaregiverPacController = new GetCaregiverController();
const getCaregiverByPatientController = new GetCaregiverByPatientController();

// Cadastrar mais de um cuidador
caregiverpacsRoutes.post('/cad', createCaregiverPacs.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
})

// Listar todos cuidadores a linkados a um paciente
caregiverpacsRoutes.get('/list', getCaregiverPacController.handle);


// Listar cuidadores linkados a um paciente
caregiverpacsRoutes.get('/caregivers/:patientId', getCaregiverByPatientController.handle);

export { caregiverpacsRoutes }