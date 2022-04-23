import { FC, memo, useEffect, useState } from 'react';
import Form from '../Form/Form';
import * as yup from 'yup';

type Props = {
  user?: User;
  disabled: boolean;
  onSubmit: FormSubmit;
};

const fields = {
  name: { label: 'Name', value: '' },
  username: { label: 'User name', value: '' },
  email: { label: 'Email', value: '' },
  street: { label: 'Street', value: '' },
  city: { label: 'City', value: '' },
  zipcode: { label: 'Zip code', value: '' },
  phone: { label: 'Phone', value: '' },
  website: { label: 'Website', value: '' },
  comment: { label: 'Comment', value: '' },
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
  const [formFields, setFormFields] = useState(fields);

  useEffect(() => {
    if (user) {
      const fieldEntries = Object.entries(fields).map(([key, value]) => {
        const targetObj = ['street', 'city', 'zipcode'].includes(key)
          ? user.address
          : user;
        return [
          key,
          {
            ...value,
            value: targetObj[key as keyof typeof targetObj] || value,
          },
        ];
      });
      setFormFields(Object.fromEntries(fieldEntries));
    }
  }, [user]);

  return (
    <Form
      fields={formFields}
      disabled={disabled}
      onSubmit={onSubmit}
      validationSchema={userSchema}
    />
  );
};

export default memo(UserForm);
