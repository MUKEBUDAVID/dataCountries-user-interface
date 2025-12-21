// hooks/useScrollContext.ts
import { useContext } from 'react';
import { ScrollContext } from '../context/ScrollContext';
export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within ScrollProvider');
  }
  return context;
};