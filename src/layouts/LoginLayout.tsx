import { Component, ComponentProps, JSXElement, children } from "solid-js";
import ThemeSwitch from "../components/ThemeSwitch";
import Footer from "./Footer";

interface LoginLayoutProps extends ComponentProps<any> {
  children: JSXElement;
}

const LoginLayout: Component<LoginLayoutProps> = (props: LoginLayoutProps) => {
  const c = children(() => props.children);
  return (
    <>
      <div class="flex flex-col min-h-screen dark:bg-gray-800 dark:text-gray-200">
        <div class="flex justify-end p-5">
          <ThemeSwitch />
        </div>
        <div class="flex items-center justify-center lg:mt-auto">{c()}</div>
        <div class="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
