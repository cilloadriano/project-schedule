import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient';

export class DeleteSchedulingController {
    
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        
        const schedule = await prismaClient.schedule.delete
            ({
                where: { id: Number(id) },
            });
        return response.json(schedule);
    }
}