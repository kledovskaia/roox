import { FC, memo, useEffect, useState } from 'react';
import Form from '../Form/Form';

type Props = {
  user?: User;
  disabled: boolean;
  onSubmit: FormSubmit;
};

const fields: Field[] = [
  { name: 'name', label: 'Name', value: '' },
  { name: 'username', label: 'User name', value: '' },
  { name: 'email', label: 'Email', value: '' },
  { name: 'street', label: 'Street', value: '' },
  { name: 'city', label: 'City', value: '' },
  { name: 'zipcode', label: 'Zip code', value: '' },
  { name: 'phone', label: 'Phone', value: '' },
  { name: 'website', label: 'Website', value: '' },
  { name: 'comment', label: 'Comment', value: '' },
];

const UserForm: FC<Props> = ({ user, disabled, onSubmit }) => {
  const [formFields, setFormFields] = useState<Field[]>(fields);

  useEffect(() => {
    if (user) {
      const fieldsWithValues = fields.map((field) => {
        const targetObj = ['street', 'city', 'zipcode'].includes(field.name)
          ? user.address
          : user;
        return {
          ...field,
          value: targetObj[field.name as keyof typeof targetObj] || field.value,
        };
      });
      setFormFields(fieldsWithValues);
    }
  }, [user]);

  return <Form fields={formFields} disabled={disabled} onSubmit={onSubmit} />;
};

export default memo(UserForm);
