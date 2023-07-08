import { JSXElement } from "solid-js";
import TitleProvider from "./title";
import ThemeProvider from "./theme";

interface providersProps {
    children: JSXElement;
}

function ContextProvider(props: providersProps) {
    return (
        <>
            <TitleProvider prefix="Auth">
                <ThemeProvider defaultTheme="light">
                    {props.children}
                </ThemeProvider>
            </TitleProvider>
        </>
    )
}

export default ContextProvider;