// 1. Create a global loading context - components/context/GlobalLoadingContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface GlobalLoadingContextProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isNavigating: boolean;
  setIsNavigating: (navigating: boolean) => void;
}

const GlobalLoadingContext = createContext<
  GlobalLoadingContextProps | undefined
>(undefined);

export const useGlobalLoading = () => {
  const context = useContext(GlobalLoadingContext);
  if (!context) {
    throw new Error(
      "useGlobalLoading must be used within a GlobalLoadingProvider"
    );
  }
  return context;
};

export const GlobalLoadingProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Stop navigation loading when route changes
    setIsNavigating(false);
    setIsLoading(false);
  }, [pathname]);

  return (
    <GlobalLoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isNavigating,
        setIsNavigating,
      }}
    >
      {children}
    </GlobalLoadingContext.Provider>
  );
};
