export type FormValues = Record<string, string>;

export type Validator<T> = (value: T) => {valid: boolean, message: string};

export type SubmitHandler<T> = (values: T) => void;

export type FormSubmitHandler<T> = (callback: SubmitHandler<T>) => (e: Event) => void;

export type FormRegisterFields<T> = (name: keyof T, validator?: Validator<keyof T>) => {
    ref: (el: HTMLInputElement | null) => void;
};

export type FormReturn<T> = {
    register: FormRegisterFields<T>;
    handleSubmit: FormSubmitHandler<T>;
}