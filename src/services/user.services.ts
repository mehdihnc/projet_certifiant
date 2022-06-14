import { DocumentDefinition } from "mongoose";
import UserModel from "../models/user.model";
import { UserDocument } from "../interfaces/interface.user";
import { faker } from '@faker-js/faker';

export const USERS: any[] = [];

export function createRandomUser(): any {
  let user =
  {
    surname:faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    name:faker.name.firstName(),
  };
  return user
}
Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});

export function createMultipleRandomUser(n:number) {
  let users: any[] = [];
  for (let i = 0; i < n; i++) {
    users.push(createRandomUser());
  }
  return users;
}

export async function createBDD(array:any[]) {
  let users: any[] = [];
  try {
    for (let i = 0; i < array.length; i++) {
     await UserModel.create(array[i]);
  }
  return users;} catch (error: any) {
    throw new Error(error);
  }
  
}




export async function createUser(
    input: DocumentDefinition<Omit<UserDocument, 'createdAT' | 'updateAT' | 'comparePassword' >>
  ): Promise<any> {
    try {
      await UserModel.create(input);
    } catch (error: any) {
      throw new Error(error);
    }
  }
