import { Request, Response } from "express";
import { CreateRemedioCase } from "./createRemedioCase";

export class CreateRemedioController {
    async handle(req: Request, res: Response) {
        const {
            descricao,
            quantidade,
            hora,
            paciente
        } =req.body;

        const createRemedioCase = new CreateRemedioCase();

        const result = await createRemedioCase.execute({
            descricao,
            quantidade,
            hora,
            paciente
        });

        return res.status(201).json(result)
    }
}