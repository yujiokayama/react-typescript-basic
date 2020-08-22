import React, { createContext, useEffect, useState } from "react";

type ThemeTypes = {
  background: string;
  text: string;
};

const themeLight: ThemeTypes = {
  background: "#fff",
  text: "#000",
};

const themeDark: ThemeTypes = {
  background: "#000",
  text: "#fff",
};

type ThemeContext = {
  currentTheme: ThemeTypes;
};

const ThemeContext = createContext<ThemeContext>({
  currentTheme: themeLight,
});

const ThemeProvider = (props: any) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeContext>({
    currentTheme: themeLight,
  });

  useEffect(() => {
    // setCurrentTheme({
    //   currentTheme: themeDark,
    // });
  }, []);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {props.children}
      <p>hoge</p>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
