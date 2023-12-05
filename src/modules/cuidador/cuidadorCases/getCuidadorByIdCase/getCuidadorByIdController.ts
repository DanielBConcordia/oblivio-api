import { Request, Response } from "express";
import { GetCuidadorByIdCase } from "./getCuidadorByIdCase";

export class GetCuidadorByIdController {
    async handle(req: Request, res: Response) {
        try {
            const cuidadorId = parseInt(req.params.id); // Assuming the cuidadorId is passed in the URL parameter

            const getCuidador = new GetCuidadorByIdCase();
            const result = await getCuidador.execute(cuidadorId);

            if (result) {
                return res.status(200).json(result);
            } else {
                return res.status(404).json({ error: "Cuidador not found" });
            }
        } catch (error) {
            console.error("Error fetching cuidador:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
