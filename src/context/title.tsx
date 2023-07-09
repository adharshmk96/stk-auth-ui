import { Accessor, JSXElement, Setter, children, createContext, createEffect, createSignal, useContext } from "solid-js";

interface TitleProviderProps {
  children: JSXElement;
  prefix?: string;
}


const titleContext = (defaultValue: string) => {
  const [title, setTitle] = createSignal<string>(defaultValue);  
  return [title, setTitle] as const;
}

function TitleProvider(props: TitleProviderProps) {
  const c = children(() => props.children);
  const [title, setTitle] = titleContext("");
  
  createEffect(() => {
    const prefix = props.prefix || "";
    const finalTitle = () => prefix + " " + title();
    document.title = finalTitle();
  });
  
  const values = [title, setTitle] as const;
  
  return (
    <TitleContext.Provider value={values}>
      <>{c()}</>
    </TitleContext.Provider>
  );
}

type TTitleContext = ReturnType<typeof titleContext>;
export const TitleContext = createContext<TTitleContext>([() => "", undefined]);
export const useTitle = () => useContext(TitleContext);
export default TitleProvider;
