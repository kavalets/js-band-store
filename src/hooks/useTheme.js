import { useEffect, useState } from 'react';
import { LS_KEYS, LS_Service } from 'services/localStorage';

export default function useTheme() {
  const mediaWatcher = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersTheme = mediaWatcher.matches ? 'dark' : 'light';
  const [theme, setTheme] = useState(
    LS_Service.get(LS_KEYS.THEME) || prefersTheme
  );

  useEffect(() => {
    LS_Service.set(LS_KEYS.THEME, theme);
    document.firstElementChild.dataset.theme = theme;
  }, [theme]);

  return [theme, setTheme];
}
