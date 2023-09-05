import * as Yup from "yup";
import { useFormik } from "formik";
import { isEmptyObj } from "minoru";
import { maskJs } from "mask-js";

import UiFormInput from "../UI/UiFormInput";
import UiFormButton from "../UI/UiFormButton";

import styles from "./Form.module.scss";

interface Props {
  setFormBody: Function;
}

export const Form = ({ setFormBody }: Props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      number: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("*некорректный email")
        .required("*поле обязательно"),
      number: Yup.string()
        .min(6, "*слишком короткий номер")
        .max(9, "*слишком длинный номер"),
    }),
    onSubmit: ({ email, number }) => {
      if (number) {
        const validNum = number.replace(/-/g, "").slice(0, 6);
        setFormBody({ email, number: validNum });
      } else {
        setFormBody({ email });
      }
    },
  });
  // 822286
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h1 className={styles.form__title}>Форма Поиска</h1>
      <UiFormInput
        name="email"
        title="Email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        errors={formik.errors.email}
        touched={formik.touched.email}
      />
      <UiFormInput
        name="number"
        type="string"
        title="Номер"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={maskJs("99-99-99", formik.values.number)}
        errors={formik.errors.number}
        touched={formik.touched.number}
      />
      <UiFormButton title={"Войти"} disabled={!isEmptyObj(formik.errors)} />
    </form>
  );
};

export default Form;
