import { CaregiverPac } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateCaregiverPacDTO } from "../../dtos/createCaregiverPacDTO";
import { AppError } from "../../../../errors/appError";

export class CreateCaregiverPacCase {
    async execute({
        idPaciente, idCuidador
    }: CreateCaregiverPacDTO): Promise<CaregiverPac> {

        const caregiverpac = await prisma.caregiverPac.create({
            data: {
                idPaciente,
                idCuidador
            }
        })

        return caregiverpac;
    }


}