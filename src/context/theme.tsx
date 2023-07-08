import { Accessor, JSXElement, Setter, createContext, createEffect, createSignal, useContext } from "solid-js";


type TThemeProviderProps = {
    children: JSXElement;
    defaultTheme: string;
}

type TThemeContext = [Accessor<string>, Setter<string>];

export const ThemeContext = createContext<TThemeContext>([() => "",undefined])

const ThemeProvider = (props: TThemeProviderProps) => {
    const [theme, setTheme] = createSignal<string>(props.defaultTheme);
    

    createEffect(() => {
        // if (!props.defaultTheme && theme() === "") {
        //     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        //     setTheme(prefersDark ? "dark" : "light")
        // }
        document.documentElement.classList.toggle("dark", theme() === "dark")
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