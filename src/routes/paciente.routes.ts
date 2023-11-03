import { Router } from "express";
import { CreatePacienteController } from "../modules/paciente/pacienteCase/createPaciente/createPacienteController";
import { GetPacienteController } from "../modules/paciente/pacienteCase/getPacienteCase/getPacienteController";
import { Request, Response } from "express";
const pacienteRoutes = Router();

const createPaciente = new CreatePacienteController();
const getPaciente = new GetPacienteController();

// Cadastro Paciente
pacienteRoutes.post("/cad", createPaciente.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
})

// Listagem Paciente
pacienteRoutes.get("/list", getPaciente.handle);

export { pacienteRoutes }