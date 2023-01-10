import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SeoBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  withTitle?: boolean
}