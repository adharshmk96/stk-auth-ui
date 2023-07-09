import { JSXElement, children } from "solid-js";
import TitleProvider from "./title";
import ThemeProvider from "./theme";

interface providersProps {
  children: JSXElement;
}

function ContextProvider(props: providersProps) {
  const c = children(() => props.children);
  return (
    <>
      <TitleProvider prefix="Auth">
        <ThemeProvider defaultTheme="light">{c()}</ThemeProvider>
      </TitleProvider>
    </>
  );
}

export default ContextProvider;
