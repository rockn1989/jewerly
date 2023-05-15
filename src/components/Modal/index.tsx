// import { ModalProps } from './Modal.props';

// import cn from 'classnames';
// import styles from './Modal.module.scss';
// import React, { forwardRef } from 'react';

// export const Modal = forwardRef<HTMLDivElement, ModalProps>(({ className, onClickForClose, children, ...rest }, ref) => {

//   const handleModalClose = (event: React.MouseEvent): void => {
//     if (event.target === ref?.current) {
//       onClickForClose();
//     }
//   }

//   return (
//     <div
//       ref={ref}
//       className={styles.overlay}
//       onClick={(event) => handleModalClose(event)}
//       {...rest}
//     >
//       <div className={cn(className, styles.container)}>
//         {children}
//       </div>
//     </div>
//   )
// });

// Modal.displayName = 'Modal';
