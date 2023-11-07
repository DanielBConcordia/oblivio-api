import { Request, Response } from "express";
import { GetRemedioCase } from "./getRemedioCase";

export class GetRemedioController {
    async handle(req: Request, res: Response) {
        const getRemedio = new GetRemedioCase();

        const result = await  getRemedio.execute();

        return res.status(201).json(result);
    }
}