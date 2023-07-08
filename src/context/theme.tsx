import { Accessor, JSXElement, Setter, createContext, createEffect, createSignal, onMount, useContext } from "solid-js";

import constants from '@/constants';

type TThemeProviderProps = {
    children: JSXElement;
    defaultTheme: string;
}

type TThemeContext = [Accessor<string>, Setter<string>];

export const ThemeContext = createContext<TThemeContext>([() => "", undefined])

const ThemeKey = "stk-auth-theme"

const ThemeProvider = (props: TThemeProviderProps) => {
    const [theme, setTheme] = createSignal<string>(props.defaultTheme);

    onMount(() => {
        // read from cache
        const cachedTheme = localStorage.getItem(ThemeKey)
        if (cachedTheme) {
            setTheme(cachedTheme)
        }
    })

    createEffect(() => {
        // if (!props.defaultTheme && theme() === "") {
        //     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        //     setTheme(prefersDark ? "dark" : "light")
        // }
        document.documentElement.classList.toggle(constants.DARK_MODE, theme() === constants.DARK_MODE)
        // write to cache
        localStorage.setItem(ThemeKey, theme())
    })

    const values: TThemeContext = [
        theme,
        setTheme
    ]

    return (
        <ThemeContext.Provider value={values}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => { return useContext(ThemeContext) }