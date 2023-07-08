import { onCleanup } from "solid-js";
import { FormReturn, FormValues } from "./types/form";

function createForm<T extends FormValues>(initialValues: T): FormReturn<T> {
  const fields: Record<keyof T, HTMLInputElement | null> = {} as Record<keyof T, HTMLInputElement | null>;

  const register = (name: keyof T) => ({
    ref: (el: HTMLInputElement | null) => {
      if (el) {
        fields[name] = el;
        el.value = initialValues[name];
      } else {
        if (fields[name]) {
          fields[name] = null;
        }
      }
    }
  });

  const getValues = (): T => {
    let values: FormValues = {};
    for (let name in fields) {
      const field = fields[name];
      if (field) {
        values[name] = field.value;
      }
    }
    return values as T;
  };

  const handleSubmit = (callback: (values: T) => void) => {
    return (e: Event) => {
      e.preventDefault();
      callback(getValues());
    };
  };

  // cleanup when component unmounts
  onCleanup(() => {
    for (let name in fields) {
      fields[name] = null;
    }
  });

  return { register, handleSubmit };
}

export default createForm;
