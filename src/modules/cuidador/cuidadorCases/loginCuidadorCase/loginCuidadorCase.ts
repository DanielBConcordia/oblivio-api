// loginCuidadorCase.ts
import { Cuidador } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/appError";

export class LoginCuidadorCase {
    async execute({ email, senha }: { email: string, senha: string }): Promise<Cuidador | null> {
        // Verificar se o usuário existe com o email fornecido
        const cuidador = await prisma.cuidador.findUnique({
            where: {
                email
            }
        });

        if (!cuidador) {
            throw new AppError("User not found");
        }

        // Verificar se a senha está correta
        if (cuidador.senha !== senha) {
            throw new AppError("Incorrect password");
        }

        return cuidador;
    }
}
