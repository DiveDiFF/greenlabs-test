import { useRouter } from 'next/router';
import { RiCouponLine, RiHome3Line, RiShoppingCartLine } from 'react-icons/ri';
import { MenuItem } from 'typings/menu';

import styles from './HeaderMenu.module.css';
import HeaderMenuItem from './MenuItem';

const HEADER_MENUS: MenuItem[] = [
  {
    label: "팜모닝 농자재 상점",
    icon: <RiHome3Line />,
    path: "/product-list",
  },
  {
    label: "쿠폰 목록",
    icon: <RiCouponLine />,
    path: "/coupon",
    count: 5,
  },
  {
    label: "장바구니",
    icon: <RiShoppingCartLine />,
    path: "/cart",
    count: 0,
  },
];

export default function HeaderMenu() {
  const { container, menuItemWrapper } = styles;

  const { pathname } = useRouter();

  return (
    <ul className={container}>
      {HEADER_MENUS.map((menu) => {
        console.log(menu.path, pathname, menu.path === pathname);
        return (
          <HeaderMenuItem
            key={menu.label}
            isActive={pathname === menu.path}
            {...menu}
          />
        );
      })}
    </ul>
  );
}
