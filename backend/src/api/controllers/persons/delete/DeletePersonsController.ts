import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient';

export class DeletePersonsController {
    
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        
        const person = await prismaClient.person.delete({
            where: {
                id: Number(id)
            },
        })
        return response.json(person);
    }
}