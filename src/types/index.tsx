export interface IUser {
  id: number;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUserData {
  id?: number;
  username: string;
  email: string;
  city: string;
  company: string;
}

export type SortDirection = "asc" | "desc";
