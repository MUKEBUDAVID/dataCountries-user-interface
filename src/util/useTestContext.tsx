// useTestContext.tsx
import { useContext } from "react";
import { TestContext } from "../context/TestContextProvider"; // Importez le contexte d'un autre fichier

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error("useTestContext must be used within a TestContextProvider");
  }
  return context;
};