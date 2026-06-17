import type { ReactNode } from 'react';
import styles from './Kicker.module.css';

interface KickerProps {
  children: ReactNode;
}

export default function Kicker({ children }: KickerProps): JSX.Element {
  return <p className={styles.kicker}>{children}</p>;
}
