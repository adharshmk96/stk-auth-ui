import { JSXElement, children } from "solid-js";
import TitleProvider from "./title";
import ThemeProvider from "./theme";
import AuthProvider from "./auth";

interface providersProps {
  children: JSXElement;
}

function ContextProvider(props: providersProps) {
  return (
    <>
      <TitleProvider prefix="Auth">
        <ThemeProvider defaultTheme="light">
          <AuthProvider>{props.children}</AuthProvider>
        </ThemeProvider>
      </TitleProvider>
    </>
  );
}

export default ContextProvider;
