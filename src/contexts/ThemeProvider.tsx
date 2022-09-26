import { createContext, useEffect, useState } from "react";

interface IThemeProviderProps {
  initialTheme?: string;
  children: React.ReactNode;
}

interface IThemeContext {
  theme: string;
  setTheme: any;
}

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPreference = window.localStorage.getItem("theme");
    if (typeof storedPreference === "string") return storedPreference;
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) return "dark";
  }

  return "light";
};

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: "",
});

export const ThemeProvider = ({
  initialTheme,
  children,
}: IThemeProviderProps) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const setRawTheme = (rawTheme: string) => {
    console.log(rawTheme);
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("theme", rawTheme);
  };

  if (initialTheme) {
    setRawTheme(initialTheme);
  }

  useEffect(() => {
    setRawTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme } as IThemeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
