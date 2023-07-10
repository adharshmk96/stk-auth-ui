import { render } from "solid-js/web";
import "./index.css";
// Setup
import Routing from "./router";
import ContextProvider from "./context/providers";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}

const App = () => (
  <ContextProvider>
    <Routing />
  </ContextProvider>
);

render(() => <App />, root!);
