import { Accessor, JSXElement, Setter, createContext, createEffect, createSignal, useContext } from "solid-js";

interface titleProps {
    children: JSXElement
    prefix?: string
}

type titleContext = [Accessor<string>, Setter<string>];

export const TitleContext = createContext<titleContext>([() => "", undefined]);

function TitleProvider(props: titleProps) {
    const [title, setTitle] = createSignal("");

    createEffect(() => {
        const prefix = props.prefix || "";
        const finalTitle = () => prefix + " " + title();
        document.title = finalTitle();
    });

    const values: [Accessor<string>, Setter<string>] = [title, setTitle];

    return (
        <TitleContext.Provider value={values}>
            <>{props.children}</>
        </TitleContext.Provider>
    )
}

export const useTitle = () => useContext(TitleContext);
export default TitleProvider;