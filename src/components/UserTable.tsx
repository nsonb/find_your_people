import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';

const UserTable = () => {
  const { data } = useContext(UserContext);
  const [filterTerm, setFilterTerm] = useState('');
  const [ascend, setAscend] = useState(false);

  useEffect(() => {}, []);

  const renderTable = () => {
    if (typeof data === 'string') return <>Failed to fetch data</>;
    return data?.map((i) => (
      <div key={i.id} style={{ height: '6vh' }}>
        {i.name}
      </div>
    ));
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
        <div onClick={() => setAscend(!ascend)}>
          {ascend ? 'ascending' : 'descending'}
        </div>
      </div>
      {renderTable()}
    </div>
  );
};

export default UserTable;
