import Link from "next/link"
import { LogoIcon } from "../Icons";
import { LogoProps } from "./Logo.props"

import cn from 'classnames';
import styles from './Logo.module.scss';

export const Logo = ({ className }: LogoProps) => {
	return (
		<Link href="/" className={cn(className, styles.logo)}>
			<LogoIcon />
		</Link>
	)
}
