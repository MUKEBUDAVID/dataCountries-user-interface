// TestContextProvider.tsx
import { createContext, useState} from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";

interface StateContextType {
  card: string[];
  setCard: Dispatch<SetStateAction<string[]>>;
}

type propsType = {
  children: ReactNode;
};

  const TestContext = createContext<StateContextType | undefined>(undefined);

 function TestContextProvider({ children }: propsType) {
  const [card, setCard] = useState<string[]>([""]);

  return (
    <TestContext.Provider value={{ card, setCard }}>
      {children}
    </TestContext.Provider>
  );
}



export {TestContext,TestContextProvider}
