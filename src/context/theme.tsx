import { Accessor, JSXElement, Setter, children, createContext, createEffect, createSignal, onMount, useContext } from "solid-js";

import constants from "@/constants";

const ThemeKey = "stk-auth-theme";

const themeContext = (defaultValue: string) => {
  const [theme, setTheme] = createSignal<string>(defaultValue);
  
  return [theme, setTheme] as const;
}

type TThemeProviderProps = {
  children: JSXElement;
  defaultTheme: string;
};

const ThemeProvider = (props: TThemeProviderProps) => {
  const c = children(() => props.children);
  const [theme, setTheme] = themeContext(props.defaultTheme);

  onMount(() => {
    // read from cache
    const cachedTheme = localStorage.getItem(ThemeKey);
    if (cachedTheme) {
      setTheme(cachedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light")
    }
  });

  createEffect(() => {
    document.documentElement.classList.toggle(constants.DARK_MODE, theme() === constants.DARK_MODE);
    // write to cache
    localStorage.setItem(ThemeKey, theme());
  });

  const values = [theme, setTheme] as const;

  return <ThemeContext.Provider value={values}>{c()}</ThemeContext.Provider>;
};

type TThemeContext = ReturnType<typeof themeContext>;

export const ThemeContext = createContext<TThemeContext>([() => "", undefined]);

export default ThemeProvider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
