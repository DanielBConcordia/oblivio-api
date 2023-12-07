import { Request, Response } from "express";
import { DeletePacienteCase } from "./deletePacienteCase";

export class DeletePacienteController {
    async handle(req: Request, res: Response) {
        const pacienteId = parseInt(req.params.id);

        const deletePacienteCase = new DeletePacienteCase();

        try {
            const result = await deletePacienteCase.execute(pacienteId);

            return res.status(201).json(result);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }
}