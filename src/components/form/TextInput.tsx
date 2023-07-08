import { JSX, Ref } from "solid-js";

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  extraProp?: string;
}

function Input(props: InputProps, ref: Ref<HTMLInputElement>) {
  return <input class="border-2 border-gray-300 rounded-md p-2 mt-2 w-full dark:bg-gray-300 dark:text-black" {...props} ref={ref} />;
}

export default Input;
