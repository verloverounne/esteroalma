import React from 'react';
import styles from './TourVirtual.module.css';
import { useReveal } from '../hooks/useReveal';
import { useLang } from '../context/LangContext';
import { useModalStore } from '../store/modalStore';

export default function TourVirtual(): JSX.Element {
  const { lang } = useLang();
  const { dispatch } = useModalStore();
  const ref = useReveal<HTMLDivElement>();

  const content = {
    es: {
      kicker: "Experiencia 360",
      title: "Tour Virtual",
      button: "Abrir tour en pantalla completa"
    },
    en: {
      kicker: "360 Experience",
      title: "Virtual Tour",
      button: "Open tour in full screen"
    }
  };

  const t = content[lang];

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.header}>
        <span className={styles.kicker}>{t.kicker}</span>
        <h2 className={styles.title}>{t.title}</h2>
      </div>

      <div className={styles.tourBleed}>
        <div className={styles.aspectWrapper}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!4v1717614068565!6m8!1m7!1sCAoSLEFGMVFpcE03Vnd6YkhuX1BfUGpBUnZfTjU0b0NnOTIydml2d3J2Z29Yd0JS!2m2!1d-27.9174152!2d-57.2917711!3f324.7820464878479!4f10!5f0.7820865974627469" 
            className={styles.iframe}
            allowFullScreen
            loading="lazy"
            title="Estero Alma 360 Tour"
          />
          <button 
            className={styles.cta}
            onClick={() => dispatch({ type: 'OPEN' })}
          >
            {t.button}
          </button>
        </div>
      </div>
    </section>
  );
}
