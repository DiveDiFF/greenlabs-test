import styles from './Chip.module.css';

type ChipProps = {
  label: string;
};

export default function Chip({ label }: ChipProps) {
  const { container, chipLabel } = styles;
  return (
    <div className={container}>
      <span className={chipLabel}>{label}</span>
    </div>
  );
}
