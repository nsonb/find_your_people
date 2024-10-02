import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext';
import Header from './layout/Header';
import Content from './layout/Content';

export const App = () => {
  const { fetchData } = useContext(UserContext);
  useEffect(() => {
    if (fetchData !== undefined) fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};
