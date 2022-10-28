import { PropsWithChildren } from 'react';

import HeaderMenu from './HeaderMenu';
import styles from './Layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
  const { containerWrapper, container } = styles;
  return (
    <div className={containerWrapper}>
      <div className={container}>
        <HeaderMenu />
        {children}
      </div>
    </div>
  );
}
