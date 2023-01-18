import { DetailedHTMLProps, HTMLAttributes } from "react"

interface FavoriteIconProps extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  width?: number,
  height?: number,
}

export const FavoriteIcon = ({ width, height, ...rest }: FavoriteIconProps) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} {...rest} viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.97339 2.59653C6.21854 -1.65876 0.642822 0.659386 0.642822 5.29481C0.642822 8.77567 8.28682 14.2207 8.97339 14.9287C9.66468 14.2207 16.9285 8.77567 16.9285 5.29481C16.9285 0.694528 11.7334 -1.65876 8.97339 2.59653Z" fill="currentColor" />
    </svg>
  )
}