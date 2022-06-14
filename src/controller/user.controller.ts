import { Response, Request } from 'express';
import {createUser} from '../services/user.services';
import { createRandomUser } from '../services/user.services';
import {createBDD} from '../services/user.services';
import {createMultipleRandomUser} from '../services/user.services';
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

export async function populate(req: Request<{},{}, any["body"]>, res: Response) {
  try {
    const users = await createMultipleRandomUser(50)
    const user = await createBDD(users)
  console.log("Il y a pas de problème 🙌")
    res.status(200).send({
      message: 'la BDD a été peuplé 🥔',
      user: user
    });
  } catch (error: any) {
    console.log(error)
    res.status(400).send(
      error.message
    );
  }
}

