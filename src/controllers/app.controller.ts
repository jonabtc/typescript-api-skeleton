import { Request, RequestHandler, Response } from "express";

export const helloApp: RequestHandler =  (req: Request, res: Response) => res
      .status(200)
      .send({ message: "Hello World" });
