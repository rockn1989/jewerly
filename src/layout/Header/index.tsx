import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Logo, Navigation, Search } from '../../components';
import { ActionsBar } from '../../components/ActionsBar';
import { useWidth } from '../../hooks/useWidth';

export const Header = ({ className, ...rest }: HeaderProps) => {

  const width = useWidth();

  return (
    <header {...rest} className={cn(className, styles.header)}>
      <div className="container">
        <div className={styles.grid}>
          <Logo className={styles.logo} />

          {(width && width >= 960) && (
            <>
              <Navigation className={styles.nav} />
              <Search className={styles.search} />
              <ActionsBar className={styles.actionBar} />
            </>
          )}

        </div>
      </div>
    </header>
  )
}