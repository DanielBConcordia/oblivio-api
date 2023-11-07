import { Cuidador } from "@prisma/client"
import { prisma } from "../../../../prisma/client"

export class GetCuidadorCase {
    async execute():  Promise<Cuidador[]> {
        const cuidadores = await prisma.cuidador.findMany({
            orderBy: {
                id: "desc"
            }
        });

        return cuidadores;
    }
}