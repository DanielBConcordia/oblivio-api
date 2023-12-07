import { Request, Response } from "express";
import { GetPacienteByIdCase } from "./getPacienteByIdCase";

export class GetPacienteByIdController {
    async handle(req: Request, res: Response) {
        try {
            const pacienteId = parseInt(req.params.id)

            const getPacientId = new GetPacienteByIdCase();

            const result = await getPacientId.execute(pacienteId);

            if (result) {
                return res.status(201).json(result)
            } else {
                return res.status(404).json({ error: "Paciente not found" });
            }

        } catch (error) {
            console.error("Error fetching paciente:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}