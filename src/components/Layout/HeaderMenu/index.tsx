import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { RiCouponLine, RiHome3Line, RiShoppingCartLine } from 'react-icons/ri';
import { useRecoilValue } from 'recoil';
import { myCartList } from 'recoil/cart';
import { myCouponList } from 'recoil/coupon';
import { MenuItem } from 'typings/menu';

import styles from './HeaderMenu.module.css';
import HeaderMenuItem from './MenuItem';

const HEADER_MENUS: MenuItem[] = [
  {
    label: '팜모닝 농자재 상점',
    icon: <RiHome3Line />,
    path: '/product-list',
  },
  {
    label: '쿠폰 목록',
    icon: <RiCouponLine />,
    path: '/coupon',
    count: 5,
  },
  {
    label: '장바구니',
    icon: <RiShoppingCartLine />,
    path: '/cart',
    count: 0,
  },
];

export default function HeaderMenu() {
  const { container } = styles;
  const myCartItems = useRecoilValue(myCartList);
  const myCoupons = useRecoilValue(myCouponList);

  const { pathname } = useRouter();

  const headerMenus: MenuItem[] = useMemo(() => {
    const menus = [
      {
        label: '팜모닝 농자재 상점',
        icon: <RiHome3Line />,
        path: '/product-list',
      },
      {
        label: '쿠폰 목록',
        icon: <RiCouponLine />,
        path: '/coupon',
        count: myCoupons.length,
      },
      {
        label: '장바구니',
        icon: <RiShoppingCartLine />,
        path: '/cart',
        count: myCartItems.length,
      },
    ];
    if (pathname === '/cart') {
      menus.splice(1, 0, menus.pop() as MenuItem);
      return menus;
    } else {
      return menus;
    }
  }, [myCartItems.length, myCoupons.length, pathname]);

  return (
    <ul className={container}>
      {headerMenus.map((menu) => (
        <HeaderMenuItem key={menu.label} isActive={pathname === menu.path} {...menu} />
      ))}
    </ul>
  );
}
