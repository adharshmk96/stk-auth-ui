// libraries
import { Icon } from '@iconify-icon/solid';
import { createEffect, createSignal } from 'solid-js';

// context
import { useTitle } from '@/context/title';

// layouts
import LoginLayout from '@/layouts/LoginLayout';

// components
import SubmitButton from '@/components/form/Submit';
import Input from '@/components/form/TextInput';

// content
import Content from '@/content/en';

const fc = {
    brand: Content.appName,
    loginText: Content.loginPage.title,
    loginUsername: Content.loginPage.username,
    loginPassword: Content.loginPage.password,
    loginButton: Content.loginPage.button
}

const Login = () => {
    const [title, setTitle] = useTitle();
    const [showPassword, setShowPassword] = createSignal<boolean>(false);

    const [username, setUsername] = createSignal<string>("");
    const [password, setPassword] = createSignal<string>("");

    createEffect(() => {
        setTitle("Login");
    })

    const togglePassword = () => {
        setShowPassword(p => !p);
    }

    const passwordIcon = () => {
        if (showPassword()) {
            return <Icon icon="ph:eye-slash" class="text-2xl" />
        } else {
            return <Icon icon="ph:eye" class="text-2xl" />
        }
    }

    return (
        <LoginLayout>
            <div class='p-5'>
                <div class='flex items-center justify-center gap-2 mb-4'>
                    <h1 class="text-2xl">{fc.brand}</h1>
                </div>
                <form class='flex flex-col gap-5'>
                    <div class='flex flex-row items-center justify-center gap-3'>
                        <Icon icon="ph:key" class="text-4xl" />
                        <h1 class="text-3xl">{fc.loginText}</h1>
                    </div>
                    <div class="flex flex-col items-start justify-center">
                        <label for="login-username" class="text-2xl">{fc.loginUsername}</label>
                        <Input id="login-username" type="text" placeholder="Username" />
                    </div>
                    <div class="flex flex-col items-start justify-center">
                        <label class="text-2xl" for='login-password'>{fc.loginPassword}</label>
                        <div class="flex relative items-center justify-center gap-4">
                            <Input id='login-password' type={showPassword() ? "text" : "password"} placeholder="Password" />
                            <button onClick={() => togglePassword()} type="button" class="absolute right-2 top-4 dark:text-black">
                                {passwordIcon()}
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row items-right justify-end">
                        <SubmitButton>
                            {fc.loginButton}
                        </SubmitButton>
                    </div>
                </form>
            </div>
        </LoginLayout>
    )
}

export default Login