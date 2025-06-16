import { z } from "zod";

export const UserRegistrationSchema = z
  .object({
    type: z.string().min(1),
    // fullname: z.string().min(4, { message: "Your fullname must be at least 4 characters" }),
    email: z.string().email({ message: "Incorrect email format" }),
    confirmEmail: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password should be 8 characters or more" })
      .max(64, { message: "Your password should not be more than 64 characters" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_.-]{8,64}$/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      }),
    confirmPassword: z.string(),
    otp: z.string().min(6).max(6).regex(/^\d+$/, {
      message: "OTP must be a 6-digit number",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
  });