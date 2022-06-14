import { Express } from "express";
import { Request, Response } from "express";
import { createUserHandler } from "../../controller/user.controller";
import validate from "../../validate/validateRessource";
import { createUserSchema } from "../../validate/user.validate";
import { populate } from "../../controller/user.controller";
// import { createUserInput } from "../../validate/user.validate";



export function openRoutes(app: Express) {
  app.get("/healthcheck", (req: Request,  res: Response) => {
    res.status(200).send({ message: ":white_check_mark:" });
  });
  app.post("/api/user", validate(createUserSchema) ,createUserHandler);
  app.post("/faker/user", populate);
}

