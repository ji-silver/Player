import { MouseEventHandler } from "react";
import { ReactNode } from "react";

export interface CustomButtonProps {
  title: string;
  textStyles?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: boolean;
  children?: ReactNode;
}

export interface PostsProps {
  id: string;
  title: string;
  desc: string;
  date: string;
  image: string;
  location: string;
  adress: string;
}

export interface FormData {
  title: string;
  desc: string;
  location: string;
  date: string;
  time: string;
  game: string;
  image: string | null;
  userName: string | null;
  userImage: string | null;
  email: string | null;
}
