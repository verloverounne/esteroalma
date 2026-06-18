import { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LangContext';
import styles from './Hero.module.css';

const heroVideo = '/assets/Secuencia 01.mp4';
const heroImage = '/assets/esteroalma.jpg';

export default function Hero(): JSX.Element {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onReady = () => setVideoReady(true);
    video.addEventListener('canplaythrough', onReady);
    return () => video.removeEventListener('canplaythrough', onReady);
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
