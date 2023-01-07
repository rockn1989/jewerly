import Image from 'next/image';
import Link from 'next/link';
import { CardProductProps } from './CardProduct.props';

import styles from './CardProduct.module.scss';

export const CardProduct = ({ title, image }: CardProductProps) => {
  return (
    <div className={styles.card}>
      <Link href="/" className={styles.cardTitleLink}>{title}</Link>
      <Image className={styles.cardImg} src={image} alt={title} width={350} height={280} />
    </div>
  )
}