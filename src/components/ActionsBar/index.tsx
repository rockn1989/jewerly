import Link from "next/link"
import { FavoriteIcon, UserIcon } from "../Icons"
import styles from './ActionsBar.module.scss';
import cn from 'classnames';

export const ActionsBar = ({ className }: { className?: string }) => {
  return (
    <ul className={cn(className, styles.actionsList)}>
      <li className={styles.item}>
        <Link href="/" className={styles.link} aria-label="Кабинет пользователя">
          <UserIcon className={styles.iconUser} />
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/" className={styles.link} aria-label="Раздел избранное">
          <FavoriteIcon className={styles.iconFavorite} />
        </Link>
      </li>
    </ul>
  )
}