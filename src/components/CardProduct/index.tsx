import Image from 'next/image';
import Link from 'next/link';
import { CardProductProps } from './CardProduct.props';

import cn from 'classnames';
import styles from './CardProduct.module.scss';

export const CardProduct = ({ className, title, image }: CardProductProps) => {
  return (
    <div className={cn(styles.card, {
      [styles.vertical]: className === 'vertical'
    })}>
      <Link href="/catalog" className={styles.cardTitleLink}>{title}</Link>
      <Image className={styles.cardImg} src={image} alt={title} width={350} height={280} />
    </div>
  )
}