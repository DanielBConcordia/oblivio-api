import { Paciente } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../../errors/appError";

export class DeletePacienteCase {
    async execute(pacienteId: number): Promise<Paciente> {
        // Verificar se o paciente existe
        const paciente = await prisma.paciente.findUnique({
            where: {
                id: pacienteId,
            },
        });

        if (!paciente) {
            throw new AppError("Paciente not found!");
        }

        //Deletar Pacianete
        const deletePaciente = await prisma.paciente.delete({
            where: {
                id: pacienteId
            }
        })

        return deletePaciente;
    }
}