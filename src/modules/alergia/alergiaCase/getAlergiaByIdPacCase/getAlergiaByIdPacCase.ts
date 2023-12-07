import { prisma } from "../../../../prisma/client";
import { Alergias } from "@prisma/client";

export class GetAlergiaByIdPacCase {
    async execute(pacienteId: number): Promise<Alergias[]> {
        const alergias = await prisma.alergias.findMany({
            where: {
                paciente: pacienteId, // Substitua 'pacienteId' pelo nome correto da chave estrangeira
                // Ou, se a chave estrangeira e o nome da propriedade no modelo forem os mesmos:
                // pacienteId,
            },
        });

        return alergias;
    }
}
