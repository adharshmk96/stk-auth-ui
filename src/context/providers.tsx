import { JSXElement } from "solid-js";
import TitleProvider from "./title";

interface providersProps {
    children: JSXElement;
}

function ContextProvider(props: providersProps) {
    return (
        <>
            <TitleProvider prefix="Auth">
                {props.children}
            </TitleProvider>
        </>
    )
}

export default ContextProvider;