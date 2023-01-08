import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface SocialBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  posts: {
    image: string,
    video?: boolean
  }[]
}