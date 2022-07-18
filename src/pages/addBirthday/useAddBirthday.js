import { useFormik } from "formik";
import * as yup from "yup";
const useAddBirthday = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      dob: new Date(),
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .max(25, "Too Long")
        .min(3, "Too Short")
        .required("Required"),
      phone: yup
        .number()
        .min(923000000000, "Too Short")
        .max(923500000000, "Too Long")
        .required("Required"),
      dob: yup.date().required("Required"),
    }),
  });
  console.log(formik.values);
  return {
    formik,
  };
};

export default useAddBirthday;
