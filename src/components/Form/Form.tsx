import { useFormik } from 'formik';
import { FC, memo } from 'react';
import { UserSchema } from '../UserForm/UserForm';

type Props = {
  fields: Fields;
  disabled: boolean;
  onSubmit: FormSubmit;
  validationSchema: UserSchema;
};

const Form: FC<Props> = ({ fields, disabled, onSubmit, validationSchema }) => {
  const formik = useFormik({
    initialValues: fields,
    onSubmit,
    validationSchema,
  });

  return <form></form>;
};

export default memo(Form);
