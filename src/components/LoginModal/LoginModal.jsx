import { Field, Form, Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setAuth, setStatus } from "../../redux/modal.slice/modalSlice";
import * as Yup from "yup";
import s from "./LoginModal.module.scss";
import { unstable_HistoryRouter } from "react-router-dom";


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("email не коректний")
    .required("Поле обов'язкове до заповнення"),
  password: Yup.string()
    .min(3, "Більше 3 символів")
    .required("Поле обов'язкове до заповнення"),
});

const LoginModal = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isAuth = useSelector((state) => state.modal.isAuth);


  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(setStatus());
  };

  const addUser = (values) => {
    return function (dispatch) {
      users.forEach((el) => {
        if (el.email === values.email && el.password === values.password) {
          dispatch(setAuth());
          dispatch(setStatus());
          dispatch(setActive(el._id))
        }
      });
    };
  };

  return (
    <>
      <div className={s.wrapper} onClick={handleClick}>
        <div
          className={s.modalWindow}
          onClick={(event) => event.stopPropagation()}
        >
          <h1 className={s.modalWindow__title}>Вхід</h1>
          <Formik
            initialValues={{
              email: "test@gmail.com",
              password: "admin",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              dispatch(addUser(values));
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className={s.loginForm}>
                <label htmlFor="email">
                  Ел. пошта або телефон
                  <Field name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </label>

                <label htmlFor="password">
                  Пароль
                  <Field name="password" type="password" />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </label>

                <div className={s.modalWindow__buttons}>
                  <button type="submit">Увійти</button>
                  <button type="submit">Зареєструватися</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
