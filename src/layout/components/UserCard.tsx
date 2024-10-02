import { User } from '../../type';

const UserCard = (props: { user: User }) => {
  return <div className="user-card">{props.user.name}</div>;
};

export default UserCard;
