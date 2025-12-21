import { ScrollContext } from "../context/ScrollContext"; 
import { useContext } from "react";
export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (!context) {
      throw new Error('useScrollContext must be used within ScrollProvider');
    }
    return context;
  };