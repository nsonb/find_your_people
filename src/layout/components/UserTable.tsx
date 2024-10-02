import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import UserCard from './UserCard';

const UserTable = () => {
  const { data } = useContext(UserContext);
  const [filterTerm, setFilterTerm] = useState('');
  const [ascend, setAscend] = useState(false);

  useEffect(() => {}, []);

  const renderTable = () => {
    if (typeof data === 'string') return <>Failed to fetch data</>;
    return data?.map((i) => <UserCard key={i.id} user={i} />);
  };

  return (
    <div style={{ display: 'block', height: 'fit-content' }}>
      <div>
        <input
          value={filterTerm}
          type="string"
          onChange={(e) => setFilterTerm(e.target.value)}
        />
        <>{filterTerm}</>
        <button onClick={() => setAscend(!ascend)}>
          {ascend ? 'ascending' : 'descending'}
        </button>
      </div>
      {renderTable()}
    </div>
  );
};

export default UserTable;
