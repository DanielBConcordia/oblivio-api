import { Request, Response } from "express";
import { GetAlergiaCase } from "./getAlergiaCase";

export class GetAlergiaController {
    async handle(req: Request, res: Response) {
        const getAlergia = new GetAlergiaCase();

        const result = await getAlergia.execute();

        return res.status(201).json(result);
    }
}