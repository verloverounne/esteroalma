import React from 'react';
import styles from './SiteFooter.module.css';
import { useLang } from '../context/LangContext';

export default function SiteFooter(): JSX.Element {
  const { lang } = useLang();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <p>Estero Alma</p>
          <p>{lang === 'es' ? 'Reserva Natural Privada' : 'Private Nature Reserve'}</p>
        </div>
        <div className={styles.info}>
          <p>© {new Date().getFullYear()} Estero Alma. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
}
