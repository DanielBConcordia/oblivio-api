import { Request, Response } from "express";
import { GetAlergiaByIdPacCase } from "./getAlergiaByIdPacCase";

export class GetAlergiaByIdPacController {
    async handle(req: Request, res: Response) {
        const { pacienteId } = req.params;

        const getAlergiaByIdPacCase = new GetAlergiaByIdPacCase();
        const alergia = await getAlergiaByIdPacCase.execute(parseInt(pacienteId));

        return res.status(200).json(alergia);
    }
}