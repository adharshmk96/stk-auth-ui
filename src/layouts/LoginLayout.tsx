import { Component, ComponentProps, JSXElement, createEffect } from 'solid-js';
import { useTitle } from '../context/title';

interface LoginLayoutProps extends ComponentProps<any> {
    children: JSXElement;
}

const LoginLayout: Component<LoginLayoutProps> = (props: LoginLayoutProps) => {
    

    return (
        <>
        <div class='flex items-center justify-center min-h-screen'>
            {props.children}
        </div>
        </>
    )
}

export default LoginLayout;