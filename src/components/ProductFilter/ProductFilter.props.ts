import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cards: {
    title: string,
    image: string
  }[]
}