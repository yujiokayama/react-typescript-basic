import React, { createContext, useContext, useEffect, useState } from "react";

const defaultTheme = "white";

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const currentTheme = "lightblue";
    setTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
