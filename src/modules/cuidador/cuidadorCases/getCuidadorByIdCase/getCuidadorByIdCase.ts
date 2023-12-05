import { Cuidador } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetCuidadorByIdCase {
    async execute(cuidadorId: number): Promise<Cuidador | null> {
        const cuidador = await prisma.cuidador.findUnique({
            where: {
                id: cuidadorId,
            },
        });

        return cuidador;
    }
}
