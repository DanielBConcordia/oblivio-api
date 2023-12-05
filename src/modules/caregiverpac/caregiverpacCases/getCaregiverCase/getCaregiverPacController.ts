import { Request, Response } from "express";
import { GetCaregiverPacCase } from "./getCaregiverPacCase";

export class GetCaregiverController {
    async handle(req: Request, res: Response) {
        const getCaregiverPacCase = new GetCaregiverPacCase();

        const result = await getCaregiverPacCase.execute();

        return res.status(201).json(result);
    }
}