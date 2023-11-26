import { Router } from "express";
import { CreatePacienteController } from "../modules/paciente/pacienteCase/createPaciente/createPacienteController";
import { GetPacienteController } from "../modules/paciente/pacienteCase/getPacienteCase/getPacienteController";
import { GetPatientsByCaretakerController } from '../modules/paciente/pacienteCase/getPacienteByIDCuidadorCase/getPacienteByIDCuidadorController';
import { LoginPacienteController } from "../modules/paciente/pacienteCase/loginPacienteCase/loginPacienteController";
import { Request, Response } from "express";
const pacienteRoutes = Router();

const createPaciente = new CreatePacienteController();
const getPaciente = new GetPacienteController();
const getPacienteID = new GetPatientsByCaretakerController();
const LoginPaciente = new LoginPacienteController();

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

//Listar paciente pelo id do cuidador
pacienteRoutes.get("/caregiver/:caretakerId/patients", getPacienteID.handle);

//Logar paciente
pacienteRoutes.post("/login", LoginPaciente.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
});


export { pacienteRoutes }