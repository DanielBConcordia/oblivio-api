// Novo arquivo: getPatientsByCaretakerController.ts
import { Request, Response } from "express";
import { GetPatientsByCaretakerCase } from "./getPacienteByIDCuidadorCase";

export class GetPatientsByCaretakerController {
  async handle(req: Request, res: Response) {
    const { caretakerId } = req.params; // Supondo que você passará o ID do cuidador como parâmetro na rota

    const getPatientsByCaretakerCase = new GetPatientsByCaretakerCase();
    const patients = await getPatientsByCaretakerCase.execute(parseInt(caretakerId));

    return res.status(200).json(patients);
  }
}
