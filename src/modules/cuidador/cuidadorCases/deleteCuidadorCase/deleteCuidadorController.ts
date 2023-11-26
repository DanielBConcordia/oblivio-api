import { Request, Response } from "express";
import { DeleteCuidadorCase } from "./deleteCuidadorCase";

export class DeleteCuidadorController {
    async handle(req: Request, res: Response) {
        const cuidadorId = parseInt(req.params.id);

        const deleteCuidadorCase = new DeleteCuidadorCase();

        try {
            const result = await deleteCuidadorCase.execute(cuidadorId);
            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }
}
