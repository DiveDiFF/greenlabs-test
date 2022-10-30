import styles from './Chip.module.css';

type ChipProps = {
  label: string;
  variant?: 'alert' | 'success' | 'confirm';
};

export default function Chip({ label, variant = 'alert' }: ChipProps) {
  const { container, chipLabel, alert, success, confirm } = styles;
  const variantMapping = {
    alert,
    success,
    confirm,
  };
  return (
    <div className={container}>
      <span className={`${chipLabel} ${variantMapping[variant]}`}>{label}</span>
    </div>
  );
}
