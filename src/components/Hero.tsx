import { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LangContext';
import styles from './Hero.module.css';
import heroVideo from '../assets/secuencia-01.mp4';
import heroImage from '../assets/esteroalma.jpg';

export default function Hero(): JSX.Element {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener('canplaythrough', () => setVideoReady(true));
    return () => video.removeEventListener('canplaythrough', () => setVideoReady(true));
  }, []);

  return (
    <section className={styles.hero} id="inicio">
      <div className={`${styles.slide} ${videoReady ? styles.hidden : ''}`}>
        <img src={heroImage} alt="Estero Alma" className={styles.bg} />
      </div>
      <div className={`${styles.slide} ${!videoReady ? styles.hidden : ''}`}>
        <video
          ref={videoRef}
          className={styles.bg}
          autoPlay
          muted
          loop
          playsInline
          src={heroVideo}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Estero Alma</h1>
        <p className={styles.subtitle}>
          {lang === 'es'
            ? 'Reserva Natural — Loreto, Corrientes'
            : 'Nature Reserve — Loreto, Corrientes'}
        </p>
      </div>
    </section>
  );
}
