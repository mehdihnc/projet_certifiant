import { Express } from "express";
import { Request, Response } from "express";
import { createUserHandler } from "../../controller/user.controller";
import validate from "../../validate/validateRessource";
import { createUserSchema } from "../../validate/user.validate";
import { populate } from "../../controller/user.controller";
import { listUserFaker } from "../../controller/user.controller";
import { populateHandler } from "../../controller/user.controller";
// import { createUserInput } from "../../validate/user.validate";



export function openRoutes(app: Express) {
  app.get("/healthcheck", (req: Request,  res: Response) => {
    res.status(200).send({ message: ":white_check_mark:" });
  });
  app.post("/api/user", validate(createUserSchema) ,createUserHandler);
    //utilisateur créer à partir de fake données
  app.post("/faker/user/:numberOfUsers", (req: Request, res: Response) => {
      const numberOfUsers = Number(req.params.numberOfUsers);
      populateHandler(req, res, numberOfUsers);
    }); 
  app.get("/user/list", (req: Request, res: Response) => {
    listUserFaker(req,res)
  })
}

