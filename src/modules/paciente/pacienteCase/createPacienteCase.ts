import { Paciente } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { CreatePacienteDTO } from "../../cuidadores/dtos/createPacienteDTO";
import { AppError } from "../../../errors/appError";

export class CreatePacienteCase {
  async execute({
    cpf,
    nome,
    dtNascimento,
    condicao,
    responsavelLegal,
    tipoSanguineo,
    temperamento,
    interacao,
    fotoPerfil,
    tb_paciente_fk_cuidador
  }: CreatePacienteDTO): Promise<Paciente> {
    // Verificar se o paciente já existe

    const pacienteAlreadyExists = await prisma.paciente.findFirst({
      where: {
        cpf,
      },
    });

    if (pacienteAlreadyExists) {
      throw new AppError("Já existe um paciente com este CPF");
    }

    // Criar o paciente
    const paciente = await prisma.paciente.create({
      data: {
        cpf,
        nome,
        dtNascimento,
        condicao,
        responsavelLegal,
        tipoSanguineo,
        temperamento,
        interacao,
        fotoPerfil,
        tb_paciente_fk_cuidador
      },
    });

    return paciente;
  }
}
