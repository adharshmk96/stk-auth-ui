import { Accessor, JSXElement, Setter, createContext, createEffect, createSignal, useContext } from "solid-js";

interface TitleProviderProps {
  children: JSXElement;
  prefix?: string;
}

type TTitleContext = [Accessor<string>, Setter<string>];

export const TitleContext = createContext<TTitleContext>([() => "", undefined]);

function TitleProvider(props: TitleProviderProps) {
  const [title, setTitle] = createSignal("");

  createEffect(() => {
    const prefix = props.prefix || "";
    const finalTitle = () => prefix + " " + title();
    document.title = finalTitle();
  });

  const values: TTitleContext = [title, setTitle];

  return (
    <TitleContext.Provider value={values}>
      <>{props.children}</>
    </TitleContext.Provider>
  );
}

export const useTitle = () => useContext(TitleContext);
export default TitleProvider;
