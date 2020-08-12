export type  UserType = {
  id: number;
  firstName: string;
  lastName: string;
  profileTitle: string;
  phone: string;
  company: string;
  website: string;
  sphere: number;
  planId: number;
  address: UserAddress;
  customerId: string;
  signupDate: string,
  email: string;
  password: string;
};

type UserAddress = {
  street: string;
  city: string;
  zip: string;
  country: number|string;
};


export type StatisticsType = {
  id: number;
  userId: number;
  scans: number;
  dynamicsCodes: number;
  staticCodes: number;
  users: number;
};