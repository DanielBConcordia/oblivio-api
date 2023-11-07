import { Remedio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetRemedioCase {
    async execute(): Promise<Remedio[]> {
        const remedios = await prisma.remedio.findMany({
            orderBy: {
                id: "desc"
            }
        });

        return remedios
    }
}