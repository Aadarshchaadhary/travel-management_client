import yup from "@hookform/resolvers/yup";

export const bookSchema = yup.object({
  full_name: yup.string().required("full name is required"),
  phone: yup.string().required("phone number is required"),
  total_person: yup.string().required("total person is required"),
});
