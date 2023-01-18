import Link from "next/link"
import { CustomLinkProps } from './CustomLink.props';

import styles from './CustomLink.module.scss';
import cn from 'classnames';

export const CustomLink = ({ variant, size, slug, children, className }: CustomLinkProps) => {
  return (
    <Link href={slug} className={cn(className, variant, {
      [styles.black]: variant == 'black',
      [styles.white]: variant == 'white',
      [styles.small]: size == 'small',
    })}>{children}</Link>
  )
}