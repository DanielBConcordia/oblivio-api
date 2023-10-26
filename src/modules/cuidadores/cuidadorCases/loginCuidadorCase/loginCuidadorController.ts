// loginCuidadorController.ts
import { Request, Response } from "express";
import { LoginCuidadorCase } from "./loginCuidadorCase";

export class LoginCuidadorController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;

        const loginCuidadorCase = new LoginCuidadorCase();

        try {
            const cuidador = await loginCuidadorCase.execute({ email, senha });

            // Se o login for bem-sucedido, você pode gerar um token de autenticação
            // e enviá-lo como resposta para o cliente
            // Exemplo: const token = generateAuthToken(cuidador);

            return res.status(200).json({ cuidador /*, token */ });
        } catch (error: any) {
            return res.status(401).json({ error: error.message });
        }
    }
}
