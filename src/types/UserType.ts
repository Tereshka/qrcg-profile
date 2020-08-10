export type  UserType = {
  id: number;
  firstName: string;
  lastName: string;
  profileTitle: string;
  phone: string;
  company: string;
  website: string;
  planId: number;
  address: UserAddress;
  customerId: string;
  signupDate: Date,
  email: string;
  password: string;
};

type UserAddress = {
  street: string;
  city: string;
  zip: string;
  country: number;
};
