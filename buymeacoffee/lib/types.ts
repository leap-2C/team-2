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
