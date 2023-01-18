import Link from "next/link";

import styles from './Navigation.module.scss';
import cn from 'classnames';

const MockNavigation = [
  'Контрагентам',
  'Дизайнерам',
  'Вакансии',
]

export const Navigation = ({ className }: { className?: string }) => {
  return (
    <nav className={cn(className, styles.nav)}>
      <ul className={styles.navList}>
        {MockNavigation.map((nav, index) => {
          return <li key={index} className={styles.navItem}>
            <Link href="/" className={styles.link}>
              {nav}
            </Link>
          </li>
        })}
      </ul>
    </nav>
  )
}
