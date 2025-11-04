import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const registerSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      "Password must contain at least one letter, one number, and one special character"
    )
    .min(6, "At least 6 characters required"),

  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),

  first_name: yup.string().required("First name is required"),

  last_name: yup.string().required("Last name is required"),

  phone: yup
    .string()
    .optional()
    .max(15, "Phone number cannot exceed 15 characters")
    .matches(
      /^[0-9+\-]*$/,
      "Phone number can only contain digits, '+' and '-'"
    ),
});
