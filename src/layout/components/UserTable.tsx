import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import UserCard from './UserCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const UserTable = () => {
  const { userData } = useContext(UserContext);
  const [filterTerm, setFilterTerm] = useState('');
  const [ascend, setAscend] = useState(1);

  useEffect(() => {}, []);

  const renderTable = () => {
    if (typeof userData === 'string') return <>Failed to fetch userData</>;
    return userData
      ?.filter(
        (u) =>
          u.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
          u.email.toLowerCase().includes(filterTerm.toLowerCase())
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
      </div>
      <div className="sort-tab">
        <div className="sort-button" onClick={() => setAscend(1)}>
          <FontAwesomeIcon icon={faChevronDown} style={{ margin: 0 }} />
        </div>
        <div className="sort-button" onClick={() => setAscend(-1)}>
          <FontAwesomeIcon icon={faChevronUp} style={{ margin: 0 }} />
        </div>
      </div>
      <div className="user-table">{renderTable()}</div>
    </div>
  );
};

export default UserTable;
