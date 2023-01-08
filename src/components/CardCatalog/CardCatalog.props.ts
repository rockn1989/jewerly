import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardCatalogProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  type: string,
  price: number,
  slug: string,
  image?: string,
}