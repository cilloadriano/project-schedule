import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class GetAllPersonController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const persons = await prismaClient.person.findMany();

    return response.json(persons);
  }
}