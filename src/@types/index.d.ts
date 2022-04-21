type User = {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
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

type Field = {
  name: string;
  label: string;
  value: string;
};

type FormSubmit = (values: Field[]) => void;
