import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const UserTable = () => {
  const { data } = useContext(UserContext);

  useEffect(() => {}, []);

  const renderTable = () => {
    if (typeof data === 'string') return <>Failed to fetch data</>;
    return data?.map((i) => (
      <div key={i.id} style={{ height: '10vh' }}>
        {i.name}
      </div>
    ));
  };

  return (
    <div style={{ display: 'block', height: 'fit-content' }}>
      {renderTable()}
    </div>
  );
};

export default UserTable;
