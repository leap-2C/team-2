export type Supporter = {
  name: string;
  amount: number;
  message: string;
};

export type Creator = {
  name: string;
  about: string;
  socialUrl: string;
  image: string;
  description: string;
  url: string;
  supporters: Supporter[];
};

export type UserProfile = {
  id: number;
  createdAt: string;
  updatedAt: string;
  aboutMe: string | null;
  avatarImage: string | null;
  socialMediaUrl: string | null;
  backgroundImage: string | null;
  successMessage: string | null;
  userId: number;
};

export type Donation = {
  id: number;
  amount: number;
  message: string;
  createdAt: string;
};

export type UserData = {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  profile: UserProfile;
  donationsReceived: Donation[];
};
