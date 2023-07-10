export type FormValues = Record<string, string | FormValues[]>;

export type Validator<T> = (value: T) => { valid: boolean; message: string };

export type SubmitHandler<T> = (values: T) => void;

export type FormSubmitHandler<T> = (callback: SubmitHandler<T>) => (e: Event) => void;

type Path = string

export type FormRegisterFields<T> = (
  name: Path,
  validator?: Validator<Path>
) => {
  ref: (el: HTMLInputElement | null) => void;
};

export type FormReturn<T> = {
  register: FormRegisterFields<T>;
  handleSubmit: FormSubmitHandler<T>;
};
