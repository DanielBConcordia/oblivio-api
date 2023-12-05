// GetCaregiverByPatientCase.ts
import { CaregiverPac } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetCaregiverByPatientCase {
    async execute(patientId: number): Promise<CaregiverPac[]> {
        const caregivers = await prisma.caregiverPac.findMany({
            where: {
                idPaciente: patientId,
            },
            orderBy: {
                id: "desc",
            },
        });

        return caregivers;
    }
}
