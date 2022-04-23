import classNames from 'classnames';
import { Formik, Form as FormikForm, Field } from 'formik';
import { FC, Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import UserForm, { UserSchema } from '../UserForm/UserForm';
import s from './Form.module.scss';

type Props = {
  fields: Fields;
  disabled: boolean;
  onSubmit: FormSubmit;
  validationSchema: UserSchema;
};

const Form: FC<Props> = ({ fields, disabled, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={
        Object.fromEntries(
          Object.entries(fields).map(([name, { value }]) => [name, value])
        ) as unknown as User
      }
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <FormikForm className={s.form}>
          <div className={s.form__fieldsContainer}>
            {Object.entries(fields).map(([name, { label, tag }]) => {
              return (
                <Fragment key={name}>
                  <label htmlFor={name}>{label}</label>
                  <Field
                    disabled={disabled}
                    className={classNames(s.form__field, {
                      [s.form__field_error]:
                        touched[name as keyof typeof touched] &&
                        errors[name as keyof typeof errors],
                      [s[`form__field_${tag}`]]: true,
                    })}
                    name={name}
                    type="text"
                    as={tag}
                    value={values[name as keyof typeof values]}
                    onChange={handleChange}
                  />
                </Fragment>
              );
            })}
          </div>
          <div className={s.form__buttonsContainer}>
            <Link to="/">На Главную</Link>
            <Button submit type="submit" disabled={disabled}>
              Отправить
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};

export default memo(Form);
