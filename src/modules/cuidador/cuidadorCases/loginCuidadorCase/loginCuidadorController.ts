import { Request, Response } from "express";
import { LoginCuidadorCase } from "./loginCuidadorCase";

export class LoginCuidadorController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;

        const loginCuidadorCase = new LoginCuidadorCase();

        try {
            const { cuidador, token } = await loginCuidadorCase.execute({ email, senha });

            return res.status(200).json({ cuidador, token });
        } catch (error: any) {
            return res.status(401).json({ error: error.message });
        }
    }
}
