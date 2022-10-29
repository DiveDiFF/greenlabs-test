import styles from './Divider.module.css';

type DividerProps = {
  color?: string;
};
export default function Divider({ color }: DividerProps) {
  const { divider } = styles;
  return <hr className={divider} style={{ backgroundColor: color }} />;
}
