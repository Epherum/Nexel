// src/context/PreloaderContext.tsx
"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of the context data
interface PreloaderContextType {
  isAppLoading: boolean;
  setIsAppLoading: Dispatch<SetStateAction<boolean>>;
}

// Create the context
const PreloaderContext = createContext<PreloaderContextType | undefined>(
  undefined
);

// Create the Provider component. Its only job is to hold state.
export const PreloaderProvider = ({ children }: { children: ReactNode }) => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <PreloaderContext.Provider value={{ isAppLoading, setIsAppLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
};

// Create a custom hook for easy consumption
export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};
