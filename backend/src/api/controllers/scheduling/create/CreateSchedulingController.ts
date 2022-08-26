import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient';

export class CreateSchedulingController {
    
    async handle(request: Request, response: Response) {
        const { event_Name, event_Participants, event_Date} = await request.body;
                
        const schedule = await prismaClient.schedule.create({
            data: {
                event_Name,
                event_Participants,
                event_Date
            }
        })
        
        return response.json(schedule);
    }
}