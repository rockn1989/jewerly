import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface PortalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  show: boolean,
  onClickForClose: () => void;
}