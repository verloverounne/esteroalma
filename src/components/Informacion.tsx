import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
import Kicker from './Kicker';
import mapImage from '../assets/mapa-ilustrado.webp';
import logoImage from '../assets/estero-alma_logo.png';
import styles from './Informacion.module.css';

export default function Informacion(): JSX.Element {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="informacion">
      <div ref={ref} className="wrap reveal">
        <Kicker>{lang === 'es' ? 'Información' : 'Information'}</Kicker>
        <div className={styles.grid}>
          <div className={styles.mapWrap}>
            <img src={mapImage} alt="Mapa Estero Alma" className={styles.map} />
          </div>
          <div className={styles.details}>
            <img src={logoImage} alt="Logo Estero Alma" className={styles.logo} />
            <ul className={styles.list}>
              <li>
                <span className={styles.label}>{lang === 'es' ? 'Ubicación' : 'Location'}</span>
                <span>Loreto, Corrientes, Argentina</span>
              </li>
              <li>
                <span className={styles.label}>{lang === 'es' ? 'Superficie' : 'Area'}</span>
                <span>~500 ha</span>
              </li>
              <li>
                <span className={styles.label}>{lang === 'es' ? 'Tipo' : 'Type'}</span>
                <span>{lang === 'es' ? 'Humedal — Reserva Natural Privada' : 'Wetland — Private Nature Reserve'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
