export interface User {
  user: any;
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
