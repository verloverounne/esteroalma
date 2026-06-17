import { useState } from 'react';
import { LangContext } from './context/LangContext';
import type { Lang } from './context/LangContext';
import { ModalContext, useModalReducer } from './store/modalStore';
import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import Descripcion from './components/Descripcion';
import TourVirtual from './components/TourVirtual';
import Objetivos from './components/Objetivos';
import Informacion from './components/Informacion';
import SiteFooter from './components/SiteFooter';
import TourModal from './components/TourModal';

export default function App(): JSX.Element {
  const [lang, setLang] = useState<Lang>('es');
  const modal = useModalReducer();

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ModalContext.Provider value={modal}>
        <div lang={lang}>
          <SiteHeader />
          <main>
            <Hero />
            <Descripcion />
            <TourVirtual />
            <Objetivos />
            <Informacion />
          </main>
          <SiteFooter />
          <TourModal />
        </div>
      </ModalContext.Provider>
    </LangContext.Provider>
  );
}
