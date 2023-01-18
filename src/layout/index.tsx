import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.pageWrapper}>
      <Header className={styles.header} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer className={styles.footer} />
      <div id="modals"></div>
    </div>
  )
}
