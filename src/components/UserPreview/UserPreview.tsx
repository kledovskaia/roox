import { FC, memo } from 'react';

type Props = {
  user: User;
};

const UserPreview: FC<Props> = ({ user }) => {
  return <div>User preview</div>;
};

export default memo(UserPreview);
