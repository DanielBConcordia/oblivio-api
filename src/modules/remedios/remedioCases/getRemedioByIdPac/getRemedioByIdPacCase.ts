import { prisma } from "../../../../prisma/client";
import { Remedio } from "@prisma/client";

export class GetRemedioByIdPacCase {
    async execute(pacienteId: number): Promise<Remedio[]> {
        const remedio = await prisma.remedio.findMany({
            where: {
                paciente: pacienteId, // Ajuste para "pacienteId" se essa for a coluna correta na tabela Paciente
            }
        });
        return remedio;
    }
}