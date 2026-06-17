import { useLang } from '../context/LangContext';
import styles from './LangSwitch.module.css';

export default function LangSwitch(): JSX.Element {
  const { lang, setLang } = useLang();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.btn} ${lang === 'es' ? styles.active : ''}`}
        onClick={() => setLang('es')}
        aria-label="Español"
      >
        ES
      </button>
      <span className={styles.divider} aria-hidden="true">/</span>
      <button
        className={`${styles.btn} ${lang === 'en' ? styles.active : ''}`}
        onClick={() => setLang('en')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
