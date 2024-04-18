import { Dispatch, FormEventHandler } from "react";

export type Job = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
};
export type SearchProps = {
  handleSubmit: FormEventHandler;
  isModalOpened: boolean;
  setIsModalOpened: Dispatch<React.SetStateAction<boolean>>;
};
