import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext';
import UserTable from './components/UserTable';
import Header from './components/Header';
import Filter from './components/Filter';

export const App = () => {
  const { fetchData } = useContext(UserContext);
  useEffect(() => {
    if (fetchData !== undefined) fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Filter />
      <UserTable />
    </div>
  );
};
