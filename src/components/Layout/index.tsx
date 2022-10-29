import { PropsWithChildren } from 'react';

import HeaderMenu from './HeaderMenu';
import styles from './Layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
  const { containerWrapper, container, headerContainer } = styles;
  return (
    <div className={containerWrapper}>
      <div className={container}>
        <header className={headerContainer}>
          <HeaderMenu />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
