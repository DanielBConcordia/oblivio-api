import { Request, Response } from "express";
import { LoginPacienteCase } from "./loginPacienteCase";

export class LoginPacienteController {
    async handle (req: Request, res: Response) {
        const {cpf} = req.body;

        const loginPacienteCase = new LoginPacienteCase();

        try {
            const {paciente, token} = await loginPacienteCase.execute({cpf})

            return res.status(200).json({paciente, token});
        } catch (error: any) {
            return res.status(401).json({error: error.message});
        }
    }
}