import { Remedio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateRemedioDTO } from "../../dtos/createRemedioDTO";
import { AppError } from "../../../../errors/appError";

export class CreateRemedioCase {
    async execute({
        descricao,
        quantidade,
        hora
    }: CreateRemedioDTO): Promise<Remedio> {
        // Criar o remedio

        const remedio = await prisma.remedio.create({
            data: {
                descricao,
                quantidade,
                hora
            }
        });

        return remedio
    }
}