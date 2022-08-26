import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient';

export class CreatePersonsController {
    
    async handle(request: Request, response: Response) {
        const { person_Name, person_Email } = await request.body;
        
        const person = await prismaClient.person.create({
            data: {
                person_Name,
                person_Email
            }
        })
        return response.json(person);
    }
}