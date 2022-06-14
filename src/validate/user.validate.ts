import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Password is required ☣️",
    })
      .min(6, "Password to short 🤏"),
    email: string({
      required_error: "Email is required 📧",
    }),
    surname: string({
      required_error: "Surname is required",
    }),
  }).refine((data) => data.name !== "hitler", {
    message: "Mot interdit",
    path: ["forbiddenName"],
  }),
});

export type createUserInput = TypeOf<typeof createUserSchema>;