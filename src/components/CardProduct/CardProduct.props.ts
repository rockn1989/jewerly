import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  image: string,
}