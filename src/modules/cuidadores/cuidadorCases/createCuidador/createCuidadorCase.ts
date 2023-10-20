import { Cuidador } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateCuidadorDTO } from "../../dtos/createCuidadorDTO";
import { AppError } from "../../../../errors/appError";

export class CreateCuidadorCase {
    async execute({
        cpf, dtNascimento, email, telefone, telefoneReserva, nomeSocial, nome, senha, fotoPerfil, rua, cep, bairro, numeroCasa, cidade, uf, complementoCasa,pontoReferencia }: CreateCuidadorDTO ): Promise<Cuidador> {
           // Verificar se o usuário já existe
            
            // const cudadorAlreadyExists = await prisma.cuidador.findUnique({
            //     where: {
            //         email
            //     }
            // })

            // if (cudadorAlreadyExists) {
            //     throw new AppError("User already exists!");
            // }

            // Criar o usuário
            const cuidador = await prisma.cuidador.create({
                data: {
                    cpf, dtNascimento, email, telefone, telefoneReserva, nomeSocial, nome, senha, fotoPerfil, rua, cep, bairro, numeroCasa, cidade, uf, complementoCasa,pontoReferencia
                }
            });

            return cuidador
        }
}










