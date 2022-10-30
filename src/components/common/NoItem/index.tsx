import styles from './NoItem.module.css';

type NoItemProps = {
  type?: 'cart' | 'product-list';
};

export default function NoItem({ type = 'product-list' }: NoItemProps) {
  const { container, text } = styles;

  return (
    <div className={container}>
      <p className={text}>
        상품이 없습니다. <br /> {type === 'cart' && '상품 페이지에서 원하시는 상품을 담아보세요'}
      </p>
    </div>
  );
}
