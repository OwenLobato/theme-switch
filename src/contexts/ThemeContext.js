import { createContext, useState, useContext } from 'react';

const ThemeContextProvider = createContext();

export const ThemeContext = ({ children }) => {
  const getStoredTheme = () => window.localStorage.getItem('theme');
  const setStoredTheme = (theme) => window.localStorage.setItem('theme', theme);

  const [theme, setTheme] = useState(getStoredTheme() || 'dark');

  return (
    <ThemeContextProvider.Provider
      value={{
        getStoredTheme,
        setStoredTheme,
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContextProvider.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContextProvider);
