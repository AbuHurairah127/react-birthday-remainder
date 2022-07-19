import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux/es/exports";
import { addBirthday } from "../../store/actions/birthdayAction";
const useAddBirthday = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      dob: new Date(),
      year: 0,
      month: 0,
      day: 0,
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
    onSubmit: (values) => {
      let parsedDay = parseInt(values.dob.slice(8, 10));
      let parsedMonth = parseInt(values.dob.slice(5, 7));
      let parsedYear = parseInt(values.dob);
      let phoneNumber = values.phone.toString();
      values.day = parsedDay;
      values.month = parsedMonth;
      values.year = parsedYear;
      values.phone = phoneNumber;

      if (values.dob !== "" && values.name !== "" && values.phone !== "") {
        if (
          values.phone.charAt(0) === "9" &&
          values.phone.charAt(1) === "2" &&
          values.phone.charAt(2) === "3"
        ) {
          dispatch(addBirthday(values));
        }
      }
    },
  });
  return {
    formik,
  };
};

export default useAddBirthday;
