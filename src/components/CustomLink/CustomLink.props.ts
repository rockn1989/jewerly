import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface CustomLinkProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant: 'black' | 'white',
  slug: string,
  size?: 'small'
}