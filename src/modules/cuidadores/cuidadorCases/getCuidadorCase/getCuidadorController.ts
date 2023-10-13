import { Request, Response } from "express";
import { GetCuidadorCase } from "./getCuidadorCase";

export class GetCuidadorController {
    async handle(req: Request, res: Response) {
        const getCuidador = new GetCuidadorCase();

        const result = await getCuidador.execute();

        return res.status(201).json(result);
    }
}