import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import UserCard from './UserCard';

const UserTable = () => {
  const { data } = useContext(UserContext);
  const [filterTerm, setFilterTerm] = useState('');
  const [ascend, setAscend] = useState(1);

  useEffect(() => {}, []);

  const renderTable = () => {
    if (typeof data === 'string') return <>Failed to fetch data</>;
    return data
      ?.filter(
        (u) => u.name.includes(filterTerm) || u.email.includes(filterTerm)
      )
      ?.sort((i, k) => (i.name > k.name ? 1 : -1) * ascend)
      .map((i) => <UserCard key={i.id} user={i} />);
  };

  return (
    <div style={{ height: '100%' }}>
      <div className="search-bar">
        <input
          value={filterTerm}
          type="string"
          onChange={(e) => setFilterTerm(e.target.value)}
          placeholder="Search people"
        />
        <>{filterTerm}</>
        <button onClick={() => setAscend(ascend * -1)}>
          {ascend === 1 ? 'ascending' : 'descending'}
        </button>
      </div>
      <div className="user-table">{renderTable()}</div>
    </div>
  );
};

export default UserTable;
