import * as yup from "yup";
import "./customerPopup.css";


export  const validationSchema = yup.object().shape({
    name: yup.string().required("error:Enter your name (mandatory)"),
    surname: yup.string().required("error:Enter your surname (mandatory)"),
    phone: yup.number().required(" error:Enter your phone number (mandatory)"),
    email: yup.string().required("Email is required"),
  });

export  const initialValues = {
    name: "",
    surname: "",
    phone: "",
    email: "",
  };

 

export  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };