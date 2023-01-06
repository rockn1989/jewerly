import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Logo, Navigation, Search } from '../../components';
import { ActionsBar } from '../../components/ActionsBar';

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header {...props} className={cn(className, styles.header)}>
      <div className="container">
        <div className={styles.grid}>
          <Navigation className={styles.nav} />
          <Logo className={styles.logo} />
          <Search className={styles.search} />
          <ActionsBar className={styles.actionBar} />
        </div>
      </div>
    </header>
  )
}