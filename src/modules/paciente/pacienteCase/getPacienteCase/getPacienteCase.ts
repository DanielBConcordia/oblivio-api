import { Paciente } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPacienteCase {
    async execute(): Promise<Paciente[]> {
        const pacientes = await prisma.paciente.findMany({
            orderBy: {
                id: "desc"
            }
        });

        return pacientes    
    }
}