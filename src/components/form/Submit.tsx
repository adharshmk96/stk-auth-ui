import { JSX, children, mergeProps } from "solid-js";

// interface SubmitButtonProps {
//   children: string;
// }

interface SubmitButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

function SubmitButton(props: SubmitButtonProps) {
  const c = children(() => props.children);
  const merged = mergeProps(
    {
      class: "bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded dark:bg-emerald-900 dark:hover:bg-emerald-950",
      type: "submit"
    },
    props
  );
  return <button {...merged}>{c()}</button>;
}

export default SubmitButton;
