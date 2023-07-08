interface TextInputProps {
    id?: string;
    type?: string;
    placeholder?: string;
   onChange?: (e: Event) => void;
}

function Input(props: TextInputProps) {
    return (
        <input 
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
            class="border-2 border-gray-300 rounded-md p-2 mt-2 w-full dark:bg-gray-300 dark:text-black" 
        />
    )
}

export default Input;