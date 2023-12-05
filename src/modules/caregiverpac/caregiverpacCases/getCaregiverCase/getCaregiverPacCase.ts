import { CaregiverPac } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetCaregiverPacCase {
    async execute(): Promise<CaregiverPac[]> {
        const caregiverpacs = await prisma.caregiverPac.findMany({
            orderBy: {
                id: "desc"
            }
        })

        return caregiverpacs;
    }
}