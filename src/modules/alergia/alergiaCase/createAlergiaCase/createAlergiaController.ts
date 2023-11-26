import { Request, Response } from "express";
import { CreateAlergiaCase } from "./createAlergiaCase";

export class CreateAlergiaController {
    async handle(req: Request, res: Response) {
        const { descricao, paciente } = req.body;

        const createAlergiaCase = new CreateAlergiaCase();

        const result = await createAlergiaCase.execute({ descricao, paciente });

        return res.status(201).json(result)
    }
}