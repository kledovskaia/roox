import classNames from 'classnames';
import { Formik, Form as FormikForm, Field } from 'formik';
import { FC, Fragment, memo } from 'react';
import Button from '../Button/Button';
import { UserSchema } from '../UserForm/UserForm';
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
      initialValues={Object.fromEntries(
        Object.entries(fields).map(([name, { value }]) => [name, value])
      )}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values));
      }}
    >
      {({ errors, touched, values, handleChange }) => (
        <FormikForm className={s.form}>
          <div className={s.form__fieldsContainer}>
            {Object.entries(fields).map(([name, { label, tag }]) => (
              <Fragment key={name}>
                <label htmlFor={name}>{label}</label>
                <Field
                  disabled={disabled}
                  className={classNames(s.form__field, {
                    [s.form__field_error]: touched[name] && errors[name],
                    [s[`form__field_${tag}`]]: true,
                  })}
                  name={name}
                  type="text"
                  as={tag}
                  value={values[name]}
                  onChange={handleChange}
                />
              </Fragment>
            ))}
          </div>
          <div className={s.form__buttonsContainer}>
            <Button type="submit" disabled={disabled}>
              Отправить
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};

export default memo(Form);
