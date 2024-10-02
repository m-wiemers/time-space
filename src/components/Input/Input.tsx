import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        className={`${styles.input} ${error ? styles.errorLine : ''}`}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
