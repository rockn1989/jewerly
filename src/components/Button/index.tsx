import { ButtonProps } from './Button.props';

import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ variant, size, children, className, ...rest }: ButtonProps): JSX.Element => {

	return (
		<button className={cn(className, variant, {
			[styles.black]: variant == 'black',
			[styles.white]: variant == 'white',
			[styles.small]: size == 'small',
		})} {...rest}>{children}</button>
	)
};
