import Image from 'next/image';
import { CardCatalogProps } from './CardCatalog.props';

import cn from 'classnames';
import styles from './CardCatalog.module.scss';
import Link from 'next/link';

export const CardCatalog = ({ title, image, slug, type, price, className, ...rest }: CardCatalogProps) => {
  return (
    <div className={cn(className, styles.card)} {...rest}>
      <div className={styles.header}>
        {image && (
          <Image src={image} width={280} height={220} alt={title} className={styles.image} />
        )}
      </div>
      <div className={styles.type} data-type={type}>{type}</div>
      <Link href={`/catalog/${slug}`} className={styles.title}>{title}</Link>
      <div className={styles.price}>{price}</div>
    </div>
  )
}