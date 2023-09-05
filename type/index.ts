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
