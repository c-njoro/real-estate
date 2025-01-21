import { createContext, ReactNode, useContext, useState } from "react";

type BooleanState = {
  value: boolean;
  setValue: (newValue: boolean) => void;
};

const BooleanStateContext = createContext<BooleanState | undefined>(undefined);

export const BooleanStateProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<boolean>(false); // Initialize as false

  return (
    <BooleanStateContext.Provider value={{ value, setValue }}>
      {children}
    </BooleanStateContext.Provider>
  );
};

export const useBooleanState = () => {
  const context = useContext(BooleanStateContext);
  if (!context) {
    throw new Error(
      "useBooleanState must be used within a BooleanStateProvider"
    );
  }
  return context;
};
