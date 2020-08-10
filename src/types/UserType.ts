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
};

type UserAddress = {
  street: string;
  city: string;
  zip: string;
  country: number;
}