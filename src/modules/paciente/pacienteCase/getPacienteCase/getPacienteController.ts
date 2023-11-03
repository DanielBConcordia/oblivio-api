import { Request, Response } from "express";
import { GetPacienteCase } from "./getPacienteCase";

export class GetPacienteController {
    async handle(req: Request, res: Response) {
        const getPaciente = new GetPacienteCase();

        const result = await getPaciente.execute()

        return res.status(201).json(result);
    }
}