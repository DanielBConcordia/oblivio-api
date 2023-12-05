import { Request, Response } from "express";
import { CreateCaregiverPacCase } from "./createCaregiverPacCase";


export class CreateCaregiverPacController {
    async handle(req: Request, res: Response) {
        const { idPaciente, idCuidador } = req.body;

        const createCaregiverPacCase = new CreateCaregiverPacCase();

        const result = await createCaregiverPacCase.execute({ idPaciente, idCuidador });

        return res.status(201).json(result);
    }
}