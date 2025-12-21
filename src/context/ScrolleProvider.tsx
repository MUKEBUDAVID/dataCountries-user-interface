// context/ScrollProvider.tsx
import React, { useRef } from 'react';
import { ScrollContext } from './ScrollContext';

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const refs = {
    introduction: useRef<HTMLElement>(null),       // Changé à HTMLElement
    baseUrl: useRef<HTMLElement>(null),
    authentification: useRef<HTMLElement>(null),
    endpoints: useRef<HTMLElement>(null),
    formatData: useRef<HTMLElement>(null),
    paramReq: useRef<HTMLElement>(null),
    codeStatut: useRef<HTMLElement>(null),        // Maintenant compatible avec table
    gestionError: useRef<HTMLTableElement>(null),
    limiteQuota: useRef<HTMLElement>(null),
    exempleCode: useRef<HTMLElement>(null),
  };

  return (
    <ScrollContext.Provider value={refs}>
      {children}
    </ScrollContext.Provider>
  );
};