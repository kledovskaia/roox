import { FC, memo } from 'react';

type Props = {
  initialState?: User;
};

const UserForm: FC<Props> = ({ initialState }) => {
  return <div>Future Form</div>;
};

export default memo(UserForm);
