import { Paciente } from "@prisma/client";
import { prisma } from '../../../../prisma/client';

export class GetPacienteByIdCase {
    async execute(pacienteId: number): Promise<Paciente | null> {
        const paciente = await prisma.paciente.findUnique({
            where: {
                id: pacienteId
            }
        })

        return paciente;
    }
}