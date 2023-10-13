import { Request, Response } from "express";
import { CreateCuidadorCase } from "./createCuidadorCase";

export class CreateCuidadorController {
    async handle(req: Request, res: Response) {
        const {  cpf, dtNascimento, email, telefone, telefoneReserva, nomeSocial, nome, senha, fotoPerfil, rua, cep, bairro, numeroCasa, cidade, uf, complementoCasa, pontoReferencia } = req.body;

        const createCuidadorCase = new CreateCuidadorCase();

        const result = await createCuidadorCase.execute({  cpf, dtNascimento, email, telefone, telefoneReserva, nomeSocial, nome, senha, fotoPerfil, rua, cep, bairro, numeroCasa, cidade, uf, complementoCasa,pontoReferencia });

        return res.status(201).json(result)
    }
}