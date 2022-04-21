import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  user: User;
};

const UserPreview: FC<Props> = ({ user }) => {
  return <Link to={user.username}>{user.name}</Link>;
};

export default memo(UserPreview);
