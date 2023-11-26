import { Alergias } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateAlergiaDTO } from "../../dtos/createAlergiaDTO";
import { AppError } from "../../../../errors/appError";

export class CreateAlergiaCase {
    async execute({ descricao, paciente }: CreateAlergiaDTO): Promise<Alergias> {
        // Criar alergia

        const alergia = await prisma.alergias.create({
            data: {
                descricao,
                paciente
            }
        });

        return alergia
    }
}