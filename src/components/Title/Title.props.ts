import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string,
  as: ElementType
}