import * as Yup from "yup";

export const schemalogin = Yup.object({
  username: Yup.string().min(2, "Required").max(40).required("Required"),
  password: Yup.string().required("Required"),
});

export const schemaregister = Yup.object().shape({
  fname: Yup.string()
    .required("Required")
    .min(2, "At least 2 characters")
    .max(50, "Cannot exceed 50 characters"),
  lname: Yup.string()
    .required("Last name is required")
    .min(2, "At least 2 characters")
    .max(50, "Cannot exceed 50 characters"),
  username: Yup.string()
    .required("Required")
    .min(4, "At least 4 characters")
    .max(20, "Cannot exceed 20 characters"),
  password: Yup.string()
    .required("Required")
    .min(8, "At least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
  role: Yup.string()
    .required("Role is required")
    .oneOf(["user", "admin"], "Invalid role selected"),
});

export const schemaupdate = Yup.object().shape({
  fname: Yup.string()
    .required("Required")
    .min(2, "At least 2 characters")
    .max(50, "Cannot exceed 50 characters"),
  lname: Yup.string()
    .required("Last name is required")
    .min(2, "At least 2 characters")
    .max(50, "Cannot exceed 50 characters"),
  username: Yup.string()
    .required("Required")
    .min(4, "At least 4 characters")
    .max(20, "Cannot exceed 20 characters"),
  password: Yup.string()
    .required("Required")
    .min(8, "At least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
});
