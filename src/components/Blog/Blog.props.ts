import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BlogProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogCards: {
    title: string,
    image: string
  }[]
}