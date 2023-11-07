import { Router } from "express";
import { CreateRemedioController } from "../modules/remedios/remediosCases/createRemedio/createRemedioController";
import { Request, Response } from "express";
const remediosRoutes = Router();

const createRemedioController = new CreateRemedioController();

// Cadastro Remedio 
remediosRoutes.post("/cad", createRemedioController.handle, (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
})

export { remediosRoutes }