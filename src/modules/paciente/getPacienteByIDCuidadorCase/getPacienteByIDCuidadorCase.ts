import { prisma } from "../../../prisma/client";
import { Paciente } from "@prisma/client";

export class GetPatientsByCaretakerCase {
  async execute(caretakerId: number): Promise<Paciente[]> {
    const patients = await prisma.paciente.findMany({
      where: {
        cuidador: caretakerId, // Ajuste para "cuidadorId" se essa for a coluna correta na tabela Paciente
      }
    });
    return patients;
  }
}
