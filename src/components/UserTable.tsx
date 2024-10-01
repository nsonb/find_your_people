import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const UserTable = () => {
  const { data } = useContext(UserContext);

  useEffect(() => {}, []);

  const renderTable = () => {
    if (typeof data === 'string') return <>Failed to fetch data</>;
    return data?.map((i) => <div key={i.id}>{i.name}</div>);
  };

  return <div>{renderTable()}</div>;
};

export default UserTable;
