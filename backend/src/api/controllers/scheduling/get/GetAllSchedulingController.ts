import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class GetAllSchedulingController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const schedule = await prismaClient.schedule.findMany();

    return response.json(schedule);
  }
}