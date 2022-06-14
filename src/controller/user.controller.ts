import { Response, Request } from 'express';
import {createUser} from '../services/user.services';
import { createRandomUser } from '../services/user.services';
import { UserFaker } from '../services/user.services';
import { createUsersFaker } from '../services/user.services';
// import { createUserInput } from '../validate/user.validate';

export async function createUserHandler(req: Request<{},{}, any["body"]>, res: Response) {
    try {
    const user = await createUser(req.body)
    console.log("Il y a pas de problème 🙌")
      res.status(200).send({
        message: 'Utilisateur a bien été créé ☑️',
        user: user
      });
    } catch (error: any) {
      console.log(error)
      res.status(400).send(
        error.message
      );
    }
}

export async function listUserFaker(req: Request, res: Response) {
  try {
    const user = await UserFaker();
    console.log("Il y a pas de problème 🙌");
    res.status(200).send({
      message: "la liste est prête ✅",
      user: user,
    });
  } catch (error: any) {
    error.message = "Il y a eu un problème 🤔";
  }
} 

export async function populateHandler(
  req: Request,
  res: Response,
  numberOfUsers: number
) {
  try {
    const users = await createUsersFaker(numberOfUsers);
    res.status(200).send({
      message: numberOfUsers + " utilisateurs ont été créés ✅",
      users: users,
    });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
} 

