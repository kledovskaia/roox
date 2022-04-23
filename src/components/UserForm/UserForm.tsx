import { FC, memo, useEffect, useState } from 'react';
import Form from '../Form/Form';
import * as yup from 'yup';

type Props = {
  user?: User;
  disabled: boolean;
  onSubmit: FormSubmit;
};

const fields = {
  name: { label: 'Name', value: '', tag: 'input' },
  username: { label: 'User name', value: '', tag: 'input' },
  email: { label: 'Email', value: '', tag: 'input' },
  street: { label: 'Street', value: '', tag: 'input' },
  city: { label: 'City', value: '', tag: 'input' },
  zipcode: { label: 'Zip code', value: '', tag: 'input' },
  phone: { label: 'Phone', value: '', tag: 'input' },
  website: { label: 'Website', value: '', tag: 'input' },
  comment: { label: 'Comment', value: '', tag: 'textarea' },
};

const userSchema = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  zipcode: yup.string().required(),
  phone: yup.string().required(),
  website: yup.string().required(),
  comment: yup.string(),
});

export type UserSchema = typeof userSchema;

const UserForm: FC<Props> = ({ user, disabled, onSubmit }) => {
  const [formFields, setFormFields] = useState(null);

  useEffect(() => {
    if (user) {
      const fieldEntries = Object.entries(fields).map(([key, value]) => [
        key,
        {
          ...value,
          value: user[key as keyof typeof user],
        },
      ]);
      setFormFields(Object.fromEntries(fieldEntries));
    }
  }, [user]);

  return (
    formFields && (
      <Form
        fields={formFields}
        disabled={disabled}
        onSubmit={onSubmit}
        validationSchema={userSchema}
      />
    )
  );
};

export default memo(UserForm);
