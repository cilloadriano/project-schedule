import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class GetByPersonController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const person = await prismaClient.person.findUnique({
      where: {
          id: Number(id)
      },
  })

    return response.json(person);
  }
}