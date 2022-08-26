import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class GetBySchedulingController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const schedule = await prismaClient.person.findUnique({
      where: {
          id: Number(id)
      },
  })

    return response.json(schedule);
  }
}