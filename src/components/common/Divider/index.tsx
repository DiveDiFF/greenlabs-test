import styles from './Divider.module.css';

type DividerProps = {
  color?: 'gray100' | 'gray200' | 'gray300';
};
export default function Divider({ color }: DividerProps) {
  const { divider, gray100, gray200, gray300 } = styles;
  return <hr className={`${divider} ${color === 'gray100' ? gray100 : color === 'gray200' ? gray200 : gray300}`} />;
}
