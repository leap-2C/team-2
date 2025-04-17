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
  donor: {
    id: number;
    username: string;
    profile: {
      avatarImage: string | null;
    };
  };
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
  donorId: number;
  specialMessage: string | null;
  donor: {
    id: number;
    username: string;
    profile: {
      avatarImage: string | null;
    };
  };
};

export type UserData = {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  profile: UserProfile;
  donationsReceived: Donation[];
  bankCard: BankCard | null;
};

export interface FetchedUser {
  username: string;
  id: number;
  profile: {
    aboutMe: string;
    avatarImage: string;
    socialMediaUrl: string;
  } | null;
}

export type BankCard = {
  firstName: string;
  lastName: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
};
export interface LoginResponse {
  token: string;
  hasProfile: boolean;
  user: {
    id: string;
    email: string;
    username: string;
  };
}
type LandingPageProps = {
  setActivePage: (page: string) => void;
};

export default function LandingPage({ setActivePage }: LandingPageProps) {
  // ...
}
