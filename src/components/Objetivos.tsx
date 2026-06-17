import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
import Kicker from './Kicker';
import styles from './Objetivos.module.css';

interface Objective {
  icon: string;
  titleEs: string;
  titleEn: string;
  textEs: string;
  textEn: string;
}

const objectives: Objective[] = [
  {
    icon: '🌿',
    titleEs: 'Conservación',
    titleEn: 'Conservation',
    textEs: 'Protección de la biodiversidad y los ecosistemas nativos del Estero Alma.',
    textEn: 'Protection of biodiversity and native ecosystems of Estero Alma.',
  },
  {
    icon: '🌱',
    titleEs: 'Restauración ecológica',
    titleEn: 'Ecological restoration',
    textEs: 'Recuperación activa de áreas degradadas mediante prácticas agroecológicas.',
    textEn: 'Active recovery of degraded areas through agroecological practices.',
  },
  {
    icon: '🔬',
    titleEs: 'Investigación',
    titleEn: 'Research',
    textEs: 'Generación de conocimiento sobre los humedales del Litoral argentino.',
    textEn: 'Generation of knowledge about the wetlands of Argentine Litoral.',
  },
  {
    icon: '🏡',
    titleEs: 'Educación ambiental',
    titleEn: 'Environmental education',
    textEs: 'Formación de conciencia sobre la importancia de los humedales.',
    textEn: 'Building awareness about the importance of wetlands.',
  },
];

export default function Objetivos(): JSX.Element {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="objetivos">
      <div ref={ref} className="wrap reveal">
        <Kicker>{lang === 'es' ? 'Objetivos' : 'Objectives'}</Kicker>
        <div className={styles.grid}>
          {objectives.map((obj) => (
            <div key={obj.titleEs} className={styles.card}>
              <span className={styles.icon}>{obj.icon}</span>
              <h3 className={styles.cardTitle}>
                {lang === 'es' ? obj.titleEs : obj.titleEn}
              </h3>
              <p className={styles.cardText}>
                {lang === 'es' ? obj.textEs : obj.textEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
