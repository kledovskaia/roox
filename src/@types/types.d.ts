type FetchedUser = {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

type User = {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company['name'];
  street: Address['street'];
  city: Address['city'];
  zipcode: Address['zipcode'];
  comment?: string;
};

type Address = {
  city: string;
  geo: Coordinates;
  street: string;
  suite: string;
  zipcode: string;
};

type Coordinates = { lat: string; lng: string };

type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

type FetchError = {
  message: string;
};

type Fields = {
  [key in string]: {
    label: string;
    value: string;
  };
};

type FormSubmit = (values: Fields) => void;
