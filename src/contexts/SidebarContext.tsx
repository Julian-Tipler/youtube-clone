import React, { createContext, useContext, ReactNode, useState } from "react";

type SidebarContextType = {
  sidebarDrawerOpen: boolean;
  setSidebarDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  largeSidebarOpen: boolean;
  setLargeSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

interface SidebarProviderProps {
  children: ReactNode;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [sidebarDrawerOpen, setSidebarDrawerOpen] = useState<boolean>(false);
  const [largeSidebarOpen, setLargeSidebarOpen] = useState<boolean>(true);

  const contextValue: SidebarContextType = {
    sidebarDrawerOpen,
    setSidebarDrawerOpen,
    largeSidebarOpen,
    setLargeSidebarOpen,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }

  return context;
};
