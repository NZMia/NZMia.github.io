import React from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>('dark');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const color = theme !== 'light' ? '#dadadb' : '#1d1e20';
  const backgroundColor = theme !== 'light' ? '#1d1e20' : '#dadadb';

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
