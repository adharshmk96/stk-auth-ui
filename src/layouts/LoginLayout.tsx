import { Component, ComponentProps, JSXElement } from 'solid-js';
import ThemeSwitch from '../components/ThemeSwitch';

interface LoginLayoutProps extends ComponentProps<any> {
    children: JSXElement;
}

const LoginLayout: Component<LoginLayoutProps> = (props: LoginLayoutProps) => {


    return (
        <>
            <div class='min-h-screen dark:bg-gray-800 dark:text-gray-200'>
                <div class="flex justify-end p-5">
                        <ThemeSwitch />
                </div>
                <div class="flex items-center justify-center">
                {props.children}
                </div>
            </div>
        </>
    )
}

export default LoginLayout;