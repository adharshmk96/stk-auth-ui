interface SubmitButtonProps {
    children: string;
}

function SubmitButton(props: SubmitButtonProps) {
    return (
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-900 dark:hover:bg-blue-950">
            {props.children}
        </button>
    )
}

export default SubmitButton;