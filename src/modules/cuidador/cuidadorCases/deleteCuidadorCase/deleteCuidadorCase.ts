import { Cuidador } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/appError";

export class DeleteCuidadorCase {
    async execute(cuidadorId: number): Promise<Cuidador> {
        // Verificar se o cuidador existe
        const cuidador = await prisma.cuidador.findUnique({
            where: {
                id: cuidadorId,
            },
        });

        if (!cuidador) {
            throw new AppError("Cuidador not found");
        }

        // Deletar o cuidador
        const deletedCuidador = await prisma.cuidador.delete({
            where: {
                id: cuidadorId,
            },
        });

        return deletedCuidador;
    }
}
