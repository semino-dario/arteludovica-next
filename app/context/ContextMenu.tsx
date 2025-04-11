"use client"

import { createContext, useContext, useState, ReactNode } from "react";

interface ContextMenuType {
  section: string;
  setSection: (section: string) => void;
}

const ContextMenu = createContext<ContextMenuType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState("main-image");

  return (
    <ContextMenu.Provider value={{ section, setSection }}>
      {children}
    </ContextMenu.Provider>
  );
};

export const useContextMenu = () => {
  const context = useContext(ContextMenu);
  if (!context) {
    throw new Error("useMDOContext must be used within an MDOProvider");
  }
  return context;
};