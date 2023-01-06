
import { Header } from './Header';
import { Footer } from './Footer';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.pageWrapper}>
      <Header className={styles.header} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer className={styles.footer} />
    </div>
  )
}