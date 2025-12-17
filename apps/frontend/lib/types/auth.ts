import { z } from "zod";

// ========== Validation Patterns ==========
const PATTERNS = {
  lettersOnly: /^[a-zA-Z\s]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
};

// ========== Error Messages ==========
const MESSAGES = {
  firstName: {
    required: "First name is required",
    format: "First name can only contain letters",
    minLength: "First name must be at least 2 characters",
  },
  lastName: {
    required: "Last name is required",
    format: "Last name can only contain letters",
    minLength: "Last name must be at least 2 characters",
  },
  email: {
    required: "Email is required",
    invalid: "Invalid email address",
  },
  password: {
    required: "Password is required",
    minLength: "Password must be at least 8 characters",
    format:
      "Password must contain: uppercase, lowercase, number and special character (@$!%*?&)",
  },
  confirmPassword: {
    required: "Please confirm your password",
    match: "Passwords don't match",
  },
};

// ========== Reusable Schemas ==========
const nameField = z
  .string()
  .min(1, MESSAGES.firstName.required)
  .min(2, MESSAGES.firstName.minLength)
  .regex(PATTERNS.lettersOnly, MESSAGES.firstName.format);

const lastNameField = z
  .string()
  .min(1, MESSAGES.lastName.required)
  .min(2, MESSAGES.lastName.minLength)
  .regex(PATTERNS.lettersOnly, MESSAGES.lastName.format);

const passwordField = z
  .string()
  .min(1, MESSAGES.password.required)
  .min(8, MESSAGES.password.minLength)
  .regex(PATTERNS.password, MESSAGES.password.format);

// ========== Main Schemas ==========
export const registerSchema = z
  .object({
    firstName: nameField,
    lastName: lastNameField,
    email: z
      .string()
      .min(1, MESSAGES.email.required)
      .pipe(z.email(MESSAGES.email.invalid)),
    password: passwordField,
    confirmPassword: z.string().min(1, MESSAGES.confirmPassword.required),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: MESSAGES.confirmPassword.match,
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, MESSAGES.email.required)
    .pipe(z.email(MESSAGES.email.invalid)),
  password: passwordField,
});

// ========== Types ==========
export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
