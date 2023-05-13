export interface OpenCollectiveUser {
  memberID: number;
  createdAt: string;
  type: string;
  role: "ADMIN" | "BACKER";
  isActive: boolean;
  totalAmountDonated: number;
  currency: string;
  lastTransactionAt: string;
  lastTransactionAmount: number;
  profile: string;
  name: string;
  company: string;
  description: string;
  image: string;
  email: string;
  twitter: string;
  github: string;
  website: string;
}

export interface Server {
  hostname: string;
  country: User;
  admin: User;
}

export interface User {
  name: string;
  cc: string;
}
