import * as yup from "yup";

export const bookSchema = yup.object({
  full_name: yup.string().required("full name is required"),
  phone: yup.string().required("phone number is required"),
  total_person: yup.number().required("total seats required"),
  tour_package: yup.string().optional(),
});
