import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient';

export class UpdatePersonsController {
    
    async handle(request: Request, response: Response) {
        const { person_Name, person_Email } = await request.body;
        
        const { id } = request.params;

        const person = await prismaClient.person.update({
            where: { id: Number(id) },
            data: {
               person_Name,
               person_Email
            }
        });
        return response.json(person);
    }
}