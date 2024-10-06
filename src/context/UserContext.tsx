import { AxiosResponse, AxiosError } from 'axios';
import { createContext, useState, ReactNode } from 'react';
import userInstance from '../fetch/axios';
import { User } from '../type';

export const UserContext = createContext<ContextType>({});
/* 
  using context from react, this DataContext fetches data from the api server and keep the data in its useState
  which in turns can be accessed by the application components. Context is in React already so no need to import additional
  library 
*/

export const UserContextProvider = (props: props) => {
  const [userData, setUserData] = useState<User[] | string>();
  const fetchData = () => {
    userInstance
      .get('/users')
      .then((response: AxiosResponse) => {
        const resData = JSON.parse(JSON.stringify(response.data)) as User[];
        setUserData(resData);
      })
      .catch((err: AxiosError) => {
        setUserData('Unable to fetch');
        console.log(err);
      });
  };

  return (
    <UserContext.Provider value={{ userData, fetchData }}>
      {props.children}
    </UserContext.Provider>
  );
};

interface props {
  children: ReactNode;
}
// custom type for typescript typechecking
type ContextType = {
  userData?: User[] | string;
  fetchData?: () => void;
};
