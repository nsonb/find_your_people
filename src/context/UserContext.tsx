import { AxiosResponse, AxiosError } from 'axios';
import { createContext, useState, ReactNode } from 'react';
import userInstance from '../fetch/axios';

export const UserContext = createContext<ContextType>({});
/* 
  using context from react, this DataContext fetches data from the api server and keep the data in its useState
  which in turns can be accessed by the application components. Context is in React already so no need to import additional
  library 
*/

export const UserContextProvider = (props: props) => {
  const [data, setData] = useState<User[] | string>();
  const fetchData = () => {
    userInstance
      .get('/users')
      .then((response: AxiosResponse) => {
        const resData = JSON.parse(JSON.stringify(response.data)) as User[];
        setData(resData);
      })
      .catch((err: AxiosError) => {
        setData('Unable to fetch');
        console.log(err);
      });
  };

  return (
    <UserContext.Provider value={{ data, fetchData }}>
      {props.children}
    </UserContext.Provider>
  );
};

interface props {
  children: ReactNode;
}
// custom type for typescript typechecking
type ContextType = {
  data?: User[] | string;
  fetchData?: () => void;
};

interface User {
  id: number;
  name: string;
  phone: string;
  userName: string;
  website: string;
  email: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  };
}
