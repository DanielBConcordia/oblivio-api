import { Cuidador } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/appError";
import * as jwt from 'jsonwebtoken';

export class LoginCuidadorCase {
    async execute({ email, senha }: { email: string, senha: string }): Promise<{ cuidador: Cuidador, token: string }> {
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

        // Gerar token JWT
        const token = jwt.sign({ cuidadorId: cuidador.id }, '@oblivioApp', { expiresIn: '1h' });

        return { cuidador, token };
    }
}
