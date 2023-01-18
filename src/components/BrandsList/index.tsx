import Image from 'next/image';
import styles from './BrandsList.module.scss';

export const BrandsList = () => {
  return (
    <ul className={styles.brandsList}>
      {new Array(6).fill('').map((_, index) => {
        return <li key={index} className={styles.item}>
          <Image
            src="/images/content-img/content-logo.png"
            width={160}
            height={90}
            alt="Лого бренда"
            className={styles.img}
          />
        </li>
      })}
    </ul>
  )
}