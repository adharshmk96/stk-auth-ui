import { JSX, Ref, mergeProps } from "solid-js";

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  const merged = mergeProps({ class: "border-2 border-gray-300 rounded-md p-2 mt-2 w-full dark:bg-gray-300 dark:text-black" }, props)
  return <input {...merged}  />;
}

export default Input;
