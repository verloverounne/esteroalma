import { createContext, useContext } from 'react';

export type Lang = 'es' | 'en';

export interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LangContext = createContext<LangContextValue>({
  lang: 'es',
  setLang: () => undefined,
});

export function useLang(): LangContextValue {
  return useContext(LangContext);
}
