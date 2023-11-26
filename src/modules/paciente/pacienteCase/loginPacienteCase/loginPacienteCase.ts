import { Paciente } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import * as jwt from 'jsonwebtoken';
import { AppError } from "../../../../errors/appError";

export class LoginPacienteCase {
    async execute({ cpf }: { cpf: string }): Promise<{ paciente: Paciente, token: string }> {
        //Verificar se o paciente com o cpf existe
        const paciente = await prisma.paciente.findFirst({
            where: {
                cpf
            }
        });

        if (!paciente) {
            throw new AppError("Paciente not found")
        }

        const token = jwt.sign({ pacienteId: paciente.id }, '@oblivioApp', { expiresIn: '1h' })

        return { paciente, token };
    }
}