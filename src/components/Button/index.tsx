
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({ variant, size, children, className, ...props }: ButtonProps): JSX.Element => {

  return (
    <button className={cn(className, variant, {
      [styles.black]: variant == 'black',
      [styles.white]: variant == 'white',
      [styles.small]: size == 'small',
    })} {...props}>{children}</button>
  )
};