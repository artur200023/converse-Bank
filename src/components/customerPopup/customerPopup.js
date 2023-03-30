import { Formik, Form, Field } from "formik";
import "./customerPopup.css";
import {
  validationSchema,
  initialValues,
  handleSubmit,
} from "../customerPopup/utils";

const Customer = ({ customerPopup, closePopup }) => {


  return (
    <>
      <div className="container">
        <Formik
          initialValues={{ initialValues }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              {customerPopup && (
                <div className="custm_popup">
                  <div className="popup_custm">
                    <h2>
                      Լրացրու հայտը և դարձիր{" "}
                      <span className="conv">Converse</span> հաճախորդ
                    </h2>
                    <p>մեր մասնագետը կապ կհաստատի ձեզ հետ</p>
                    <Field
                      name="name"
                      className="pop_inp"
                      type="text"
                      placeholder="Անուն"
                    />
                    {errors.name && touched.name ? (
                      <div className="error">{errors.name}</div>
                    ) : null}
                    <Field
                      name="surname"
                      className="pop_inp"
                      type="text"
                      placeholder="Ազգանուն"
                    />
                    {errors.surname && touched.surname ? (
                      <div className="error">{errors.surname}</div>
                    ) : null}
                    <Field
                      name="phone"
                      className="pop_inp"
                      type="text"
                      placeholder="Հեռախոսահամար"
                    />
                    {errors.name && touched.phone && (
                      <div className="error">{errors.phone}</div>
                    )}
                    <Field
                      name="email"
                      className="pop_inp"
                      type="email"
                      placeholder="Էլ․ Փոստ"
                    />
                    {errors.name && touched.email ? (
                      <div className="error">{errors.email}</div>
                    ) : null}
                    <button type={"submit"} disabled={isSubmitting}>
                      ՈՒղարկել հայտ
                    </button>
                    <span className="btn_close" onClick={() => closePopup()}>
                      X
                    </span>
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Customer;
