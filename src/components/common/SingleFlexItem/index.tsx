import styles from './SingleFlexItem.module.css';

type SingleFlexItemProps = {
  label: string;
  value: string;
};
export default function SingleFlexItem({ label, value }: SingleFlexItemProps) {
  const { container, labelText, valueText } = styles;
  return (
    <div className={container}>
      <p className={labelText}>{label}</p>
      <p className={valueText}>{value}</p>
    </div>
  );
}
