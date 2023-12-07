import { Request, Response } from "express";
import { GetRemedioByIdPacCase } from "./getRemedioByIdPacCase";

export class GetRemedioByIdPacController {
    async handle(req: Request, res: Response) {
        const { pacienteId } = req.params;
        const getRemedioByIdPacCase = new GetRemedioByIdPacCase();
        const remedio = await getRemedioByIdPacCase.execute(parseInt(pacienteId));

        return res.status(201).json(remedio);
    }
}