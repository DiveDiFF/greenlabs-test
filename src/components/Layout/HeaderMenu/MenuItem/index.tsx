import Link from 'next/link';
import { MenuItem } from 'typings/menu';

import styles from './HeaderMenuItem.module.css';

type HeaderMenuItemProps = MenuItem & {
  isActive?: boolean;
};

export default function HeaderMenuItem({ isActive, path, label, icon, count }: HeaderMenuItemProps) {
  const { container, menuItem, active, itemLabel, badge } = styles;

  return (
    <li className={`${container} ${isActive && active}`}>
      <Link href={path} className={menuItem}>
        {icon}
        <h2 className={itemLabel}>{label}</h2>
        {!!count && <span className={badge}>{count}</span>}
      </Link>
    </li>
  );
}
