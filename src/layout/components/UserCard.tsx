import { User } from '../../type';

const UserCard = (props: { user: User }) => {
  const { name, address, email } = props.user;
  return (
    <div className="user-card">
      <div className="title">{name}</div>
      <div className="first-subtitle">{email}</div>
      <div className="second-subtitle">
        {address.suite}, {address.street}, {address.city}, {address.zipcode}
      </div>
    </div>
  );
};

export default UserCard;
