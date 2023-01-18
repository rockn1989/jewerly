
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./Portal.props"

import cn from 'classnames';
import styles from './Portal.module.scss';

export const Portal = ({ children, show, onClickForClose, className, ...rest }: PortalProps) => {

  const overlay = useRef<HTMLDivElement>(null);

  const handleCloseModalKeyboard = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      onClickForClose();
    }
  }

  const handleCloseModalClick = (event: React.MouseEvent): void => {
    if (event.target === overlay?.current) {
      onClickForClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModalKeyboard);
    document.body.classList.toggle('modalActive')

    return () => document.removeEventListener('keydown', handleCloseModalKeyboard);
  }, [show]);


  return (
    <>
      {show && (
        createPortal(
          <div
            className={styles.overlay}
            onClick={handleCloseModalClick}
            ref={overlay}
            {...rest}
          >
            <div className={cn(className, styles.container)}>
              {children}
            </div>
          </div>,
          document.getElementById('modals') as HTMLElement
        )
      )}
    </>
  )
}