import { Router } from "express";
import { CreatePacienteController } from "../modules/paciente/pacienteCase/createPacienteController";
import { Request, Response } from "express";
const pacienteRoutes = Router();

const createPacienteController = new CreatePacienteController();

// Cadastro Paciente
pacienteRoutes.post("/cad", createPacienteController.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
})

export { pacienteRoutes }