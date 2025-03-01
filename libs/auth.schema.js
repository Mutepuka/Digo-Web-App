import { z } from "zod";

export const UserRegistrationSchema = z.object({
    type: z.string().min(1),
    fullname: z.string().min(4, { message: "Your fullname must be at least 4 characters" }),
    email: z.string().email({ message: "Incorrect email format" }),
    confirmEmail: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password should be 8 characters or more" })
      .max(64, { message: "Your password should not be more than 64 characters" })
      .regex(/^[a-zA-Z0-9_.-]*$/, { message: "Password should only contain letters, numbers, underscore, dot, and hyphen" }),
    confirmPassword: z.string(),
    opt: z.string().min(6, { message: "You must enter a 6-digit code" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
  });
