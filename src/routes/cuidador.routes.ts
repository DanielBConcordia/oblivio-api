import { Router } from "express";
import { CreateCuidadorController } from "../modules/cuidadores/cuidadorCases/createCuidador/createCuidadorController";
import { GetCuidadorController } from "../modules/cuidadores/cuidadorCases/getCuidadorCase/getCuidadorController";
import { LoginCuidadorController } from "../modules/cuidadores/cuidadorCases/loginCuidadorCase/loginCuidadorController";
import { Request, Response } from "express";
const cuidadorRoutes = Router();

const createUserController = new CreateCuidadorController();
const getCuidador = new GetCuidadorController();
const loginCuidador = new LoginCuidadorController();

// Cadastro de cuidador
cuidadorRoutes.post("/cad", createUserController.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
});

// Listagem de cuidadores
cuidadorRoutes.get("/list", getCuidador.handle);

//Login de cuidador
cuidadorRoutes.post("/login", loginCuidador.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
});


export { cuidadorRoutes };