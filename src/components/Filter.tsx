import { useState } from 'react';

const Filter = () => {
  const [filterTerm, setFilterTerm] = useState('');
  const [ascend, setAscend] = useState(false);
  return (
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
  );
};

export default Filter;
