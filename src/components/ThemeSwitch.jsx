import { useEffect } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

const THEMES = [
  { name: 'light', color: 'bg-white' },
  { name: 'dark', color: 'bg-black' },
  { name: 'cool', color: 'bg-blue-300' },
  { name: 'warm', color: 'bg-red-200' },
];

export const ThemeSwitch = () => {
  const { theme, setTheme, getStoredTheme, setStoredTheme } = useThemeContext();

  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const newTheme = darkQuery.matches ? 'dark' : 'light';
      setTheme(newTheme);
      setStoredTheme(newTheme);
    }
  }, [setTheme]);

  const selectTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    setStoredTheme(selectedTheme);
  };

  return (
    <div className='flex flex-col items-center justify-center space-x-4'>
      <p className='text-xl'>Selected theme: {theme}</p>

      <div className='flex gap-2'>
        {THEMES.map((themeMode) => (
          <button
            key={themeMode.name}
            onClick={() => selectTheme(themeMode.name)}
            className={`w-12 h-6 rounded-full ${
              themeMode.color
            } focus:outline-none ${
              theme === themeMode.name ? 'border-2 border-blue-400' : ''
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
