import { Router } from "express";
import { CreateCuidadorController } from "../modules/cuidador/cuidadorCases/createCuidador/createCuidadorController";
import { GetCuidadorController } from "../modules/cuidador/cuidadorCases/getCuidadorCase/getCuidadorController";
import { LoginCuidadorController } from "../modules/cuidador/cuidadorCases/loginCuidadorCase/loginCuidadorController";
import { DeleteCuidadorController } from "../modules/cuidador/cuidadorCases/deleteCuidadorCase/deleteCuidadorController";
import { Request, Response } from "express";
const cuidadorRoutes = Router();

const createCuidador = new CreateCuidadorController();
const getCuidador = new GetCuidadorController();
const loginCuidador = new LoginCuidadorController();
const deleteCuidador = new DeleteCuidadorController();

// Cadastro de cuidador
cuidadorRoutes.post("/cad", createCuidador.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
});

// Listagem de cuidadores
cuidadorRoutes.get("/list", getCuidador.handle);

//Login cuidador
cuidadorRoutes.post("/login", loginCuidador.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
});

//Deletar cuidador
cuidadorRoutes.delete("/delete/:id", deleteCuidador.handle);


export { cuidadorRoutes };