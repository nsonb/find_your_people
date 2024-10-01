import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext';
import UserTable from './components/UserTable';
import Header from './components/Header';

export const App = () => {
  const { fetchData } = useContext(UserContext);
  useEffect(() => {
    if (fetchData !== undefined) fetchData();
  }, []);

  return (
    <div>
      <Header />
      <UserTable />
    </div>
  );
};
