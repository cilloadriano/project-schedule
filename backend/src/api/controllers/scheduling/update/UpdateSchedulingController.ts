import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient';

export class UpdateSchedulingController {
    
    async handle(request: Request, response: Response) {
        const {event_Name, event_Participants, event_Date } = await request.body;
        
        const { id } = request.params;

        const schedule = await prismaClient.schedule.update({
            where: { id: Number(id) },      
            data: {
                event_Name,
                event_Participants,
            },
        })
        return response.json(schedule);
    }
}