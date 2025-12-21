// context/ScrollContext.ts
import { createContext } from 'react';
import { type TypeUseRefSection } from '../types/scroll.types';

// Utilisez HTMLElement au lieu de HTMLDivElement
export type SectionRefs = Record<TypeUseRefSection, React.RefObject<HTMLElement | null>>;

export const ScrollContext = createContext<SectionRefs | null>(null);