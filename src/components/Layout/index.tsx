import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import HeaderMenu from './HeaderMenu';
import styles from './Layout.module.css';

const NO_LAYOUT_PATHNAME = ['/payment'];

export default function Layout({ children }: PropsWithChildren) {
  const { containerWrapper, container, headerContainer } = styles;
  const { pathname } = useRouter();
  return (
    <div className={containerWrapper}>
      <div className={container}>
        {!NO_LAYOUT_PATHNAME.includes(pathname) && (
          <header className={headerContainer}>
            <HeaderMenu />
          </header>
        )}
        <main>{children}</main>
      </div>
    </div>
  );
}
