import { Alergias } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAlergiaCase {
    async execute(): Promise<Alergias[]> {
        const alergias = await prisma.alergias.findMany({
            orderBy: {
                id: "desc"
            }
        });
        
        return alergias;
    }
}