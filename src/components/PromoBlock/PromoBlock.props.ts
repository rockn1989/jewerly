import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PromoBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  smallTitle: string,
  description?: string
  withForm?: boolean
}