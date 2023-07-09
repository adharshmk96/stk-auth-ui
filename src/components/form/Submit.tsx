import { JSX, children, mergeProps } from "solid-js";

// interface SubmitButtonProps {
//   children: string;
// }

interface SubmitButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

function SubmitButton(props: SubmitButtonProps) {
  const c = children(() => props.children);
  const merged = mergeProps(
    {
      class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-900 dark:hover:bg-blue-950",
      type: "submit"
    },
    props
  );
  return <button {...merged}>{c()}</button>;
}

export default SubmitButton;
