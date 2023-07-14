// libraries
import { Icon } from "@iconify-icon/solid";
import { useNavigate } from "@solidjs/router";
import { Show, createEffect, createSignal } from "solid-js";

// context
import { useTitle } from "@/context/title";

// layouts
import LoginLayout from "@/layouts/LoginLayout";

// components
import SubmitButton from "@/components/form/Submit";

// content
import Content from "@/content/en";
import { useAuth } from "@/context/auth";
import { Button, TextField } from "@kobalte/core";

const fc = {
  brand: Content.appName,
  loginText: Content.loginPage.title,
  loginUsername: Content.loginPage.username,
  loginPassword: Content.loginPage.password,
  loginButton: Content.loginPage.button
};

const Login = () => {
  const navigate = useNavigate();

  const [_title, setTitle] = useTitle();

  const { isAuth, login, error } = useAuth();

  const [showPassword, setShowPassword] = createSignal<boolean>(false);

  createEffect(() => {
    setTitle("Login");
  });

  createEffect(() => {
    if (isAuth()) {
      navigate("/dashboard");
    }

    if (error() != "") {
      alert(error());
    }
  });

  const togglePassword = () => {
    setShowPassword(p => !p);
  };

  const passwordIcon = () => (
    <Show when={showPassword()} fallback={<Icon icon="ph:eye-slash" class="text-2xl" />}>
      <Icon icon="ph:eye" class="text-2xl" />
    </Show>
  );

  const submitHandler = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    login(username, password);
  };

  return (
    <LoginLayout>
      <div class="p-5">
        <div class="flex items-center justify-center gap-2 mb-4">
          <h1 class="text-2xl">{fc.brand}</h1>
        </div>
        <form class="flex flex-col gap-5" onSubmit={submitHandler}>
          <div class="flex flex-row items-center justify-center gap-3">
            <Icon icon="ph:key" class="text-4xl" />
            <h1 class="text-3xl">{fc.loginText}</h1>
          </div>
          <TextField.Root class="flex flex-col items-start justify-center">
            <TextField.Label class="text-2xl">{fc.loginUsername}</TextField.Label>
            <TextField.Input
              class="border-2 border-gray-300 rounded-md p-2 mt-2 w-full dark:bg-gray-300 dark:text-black"
              type="text"
              placeholder="Username"
              name="username"
              required={true}
            />
          </TextField.Root>
          <TextField.Root class="flex flex-col items-start justify-center">
            <TextField.Label class="text-2xl" for="login-password">
              {fc.loginPassword}
            </TextField.Label>
            <div class="flex relative items-center justify-center gap-4">
              <TextField.Input
                class="border-2 border-gray-300 rounded-md p-2 mt-2 w-full dark:bg-gray-300 dark:text-black"
                type={showPassword() ? "text" : "password"}
                placeholder="Password"
                name="password"
                required={true}
              />
              <Button.Root onClick={() => togglePassword()} type="button" class="absolute right-2 top-4 dark:text-black">
                {passwordIcon()}
              </Button.Root>
            </div>
          </TextField.Root>
          <div class="flex flex-row items-right justify-end">
            <SubmitButton>{fc.loginButton}</SubmitButton>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
};

export default Login;
