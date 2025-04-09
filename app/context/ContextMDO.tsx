import { createContext, useContext, useState, ReactNode } from "react";

interface MDOContextType {
  section: string;
  setSection: (section: string) => void;
}

const MDOContext = createContext<MDOContextType | undefined>(undefined);

export const MDOProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState("musica-de-oficinas");

  return (
    <MDOContext.Provider value={{ section, setSection }}>
      {children}
    </MDOContext.Provider>
  );
};

export const useMDOContext = () => {
  const context = useContext(MDOContext);
  if (!context) {
    throw new Error("useMDOContext must be used within an MDOProvider");
  }
  return context;
};