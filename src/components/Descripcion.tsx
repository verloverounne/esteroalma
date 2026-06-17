import { useLang } from '../context/LangContext';
import { useReveal } from '../hooks/useReveal';
import Kicker from './Kicker';
import styles from './Descripcion.module.css';

export default function Descripcion(): JSX.Element {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="descripcion">
      <div ref={ref} className="wrap reveal">
        <Kicker>{lang === 'es' ? 'Descripción' : 'Description'}</Kicker>
        <div className={styles.prose}>
          {lang === 'es' ? (
            <>
              <p>
                Estero Alma es un humedal ubicado en Loreto, Corrientes, Argentina. Se
                caracteriza por su biodiversidad y por integrar ecosistemas
                acuáticos y terrestres, incluyendo la Laguna San José, los
                humedales y bosques circundantes.
              </p>
              <p>
                La reserva se plantea como un espacio de conservación,
                producción agroecológica, restauración ecológica,
                investigación, educación ambiental y ecoturismo de bajo
                impacto.
              </p>
            </>
          ) : (
            <>
              <p>
                Estero Alma is a wetland located in Loreto, Corrientes, Argentina.
                It is characterized by its biodiversity and by integrating aquatic
                and terrestrial ecosystems, including Laguna San José,
                wetlands, and surrounding forests.
              </p>
              <p>
                The reserve is conceived as a space for conservation,
                agroecological production, ecological restoration,
                environmental education, and low-impact ecotourism.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
