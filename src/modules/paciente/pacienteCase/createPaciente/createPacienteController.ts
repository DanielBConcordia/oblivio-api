import { Request, Response } from "express";
import { CreatePacienteCase } from "./createPacienteCase";

export class CreatePacienteController {
  async handle(req: Request, res: Response) {
    const {
      cpf,
      nome,
      dtNascimento,
      condicao,
      responsavelLegal,
      tipoSanguineo,
      temperamento,
      interacao,
      fotoPerfil,
      tb_paciente_fk_cuidador,
    } = req.body;

    const createPacienteCase = new CreatePacienteCase();

    const result = await createPacienteCase.execute({ cpf,
        nome,
        dtNascimento,
        condicao,
        responsavelLegal,
        tipoSanguineo,
        temperamento,
        interacao,
        fotoPerfil,
        tb_paciente_fk_cuidador });

    return res.status(201).json(result)
  }
}
