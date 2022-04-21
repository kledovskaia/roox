import { FC, memo } from 'react';

type Props = {
  initialState: User;
  cancel: () => void;
};

const UserForm: FC<Props> = ({ initialState, cancel }) => {
  return <div>Future Form</div>;
};

export default memo(UserForm);
