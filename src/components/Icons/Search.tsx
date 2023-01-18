import { DetailedHTMLProps, HTMLAttributes } from "react"

interface SearchIconProps extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  width?: number,
  height?: number,
}

export const SearchIcon = ({ width, height, ...rest }: SearchIconProps) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} {...rest} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.0002 17L13.8462 11.846C14.799 10.3979 15.1807 8.64774 14.9172 6.93442C14.6538 5.22111 13.764 3.66648 12.4201 2.57154C11.0762 1.47659 9.37391 0.919227 7.64269 1.00735C5.91148 1.09547 4.27453 1.82281 3.04879 3.04855C1.82305 4.27429 1.09571 5.91123 1.00759 7.64245C0.919471 9.37366 1.47684 11.076 2.57178 12.4199C3.66672 13.7637 5.22135 14.6535 6.93467 14.917C8.64799 15.1804 10.3981 14.7988 11.8462 13.846L17.0002 19L19.0002 17ZM3.00022 7.99998C3.00022 5.24298 5.24322 2.99998 8.00022 2.99998C10.7572 2.99998 13.0002 5.24298 13.0002 7.99998C13.0002 10.757 10.7572 13 8.00022 13C5.24322 13 3.00022 10.757 3.00022 7.99998Z" fill="currentColor" />
    </svg>
  )
}