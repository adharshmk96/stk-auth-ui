import { Icon } from '@iconify-icon/solid';
import { createEffect, createSignal } from 'solid-js';
import { useTitle } from '../context/title';
import LoginLayout from '../layouts/LoginLayout';

const fc = {
    brand: "STK User Managment",
    loginText: "Admin Login",
}

const Login = () => {
    const [title, setTitle] = useTitle();
    const [showPassword, setShowPassword] = createSignal<boolean>(false);

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
                        <label  for="login-username" class="text-2xl">Username</label>
                        <input  id="login-username" type="text" placeholder="Username" class="border-2 border-gray-300 rounded-md p-2 mt-2 w-full" />
                    </div>
                    <div class="flex flex-col items-start justify-center">
                        <label class="text-2xl" for='login-password'>Password</label>
                        <div class="flex relative items-center justify-center gap-4">
                        <input id='login-password' type={showPassword() ? "text": "password"} placeholder="Password" class="border-2 border-gray-300 rounded-md p-2 mt-2 w-full" />
                        <button onClick={() => togglePassword()} type="button" class="absolute right-2 top-4">
                            {passwordIcon()}
                        </button>

                        </div>
                    </div>
                    <div class="flex flex-row items-right justify-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </LoginLayout>
    )
}

export default Login