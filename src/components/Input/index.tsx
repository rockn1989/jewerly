import { InputProps } from './Input.props';

import cn from 'classnames';
import styles from './Input.module.scss';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(({ className, error, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input
        type="text"
        className={cn(styles.input, {
          [styles.error]: error
        })}
        {...rest}
        ref={ref}
      />
      {
        error && (
          <span className={styles.errorLabel}>{error.message}</span>
        )
      }
    </div>
  )
});

Input.displayName = 'Input';