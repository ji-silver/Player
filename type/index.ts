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
