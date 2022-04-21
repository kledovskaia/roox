import { FC, memo } from 'react';

type Props = {
  fields: Field[];
  disabled: boolean;
  onSubmit: FormSubmit;
};

const Form: FC<Props> = ({ fields, disabled, onSubmit }) => {
  return <form>Hello world!</form>;
};

export default memo(Form);
