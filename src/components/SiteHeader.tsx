import { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';
import LangSwitch from './LangSwitch';
import styles from './SiteHeader.module.css';

const navLinks = [
  { href: '#inicio', labelEs: 'Inicio', labelEn: 'Home' },
  { href: '#descripcion', labelEs: 'Descripción', labelEn: 'About' },
  { href: '#objetivos', labelEs: 'Objetivos', labelEn: 'Goals' },
  { href: '#informacion', labelEs: 'Información', labelEn: 'Info' },
  { href: '#tour', labelEs: 'Tour Virtual', labelEn: 'Virtual Tour' },
];

export default function SiteHeader(): JSX.Element {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#inicio" className={styles.brand}>Estero Alma</a>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.navLink}>
            {lang === 'es' ? link.labelEs : link.labelEn}
          </a>
        ))}
      </nav>
      <LangSwitch />
    </header>
  );
}
