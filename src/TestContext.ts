import * as React from "react";

// contextの型を定義
type AppContextTypes = {
  theme: string;
};

export const AppContext = React.createContext<AppContextTypes>({
  theme: "dark",
});



