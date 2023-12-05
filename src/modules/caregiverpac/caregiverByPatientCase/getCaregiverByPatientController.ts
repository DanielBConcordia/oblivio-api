// getCaregiverController.ts
import { Request, Response } from 'express';
import { GetCaregiverByPatientCase } from './getCaregiverByPatientCase';

export class GetCaregiverByPatientController {
    async handle(req: Request, res: Response) {
        const { patientId } = req.params;
        const getCaregiverByPatientCase = new GetCaregiverByPatientCase();

        try {
            const result = await getCaregiverByPatientCase.execute(parseInt(patientId));
            return res.status(200).json(result);
        } catch (error) {
            console.error('Error getting caregivers:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
