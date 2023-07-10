import { onCleanup } from "solid-js";
import { FormRegisterFields, FormReturn, FormValues } from "./types/form";

function createForm<T extends FormValues>(initialValues: T): FormReturn<T> {
  const fields: Record<string, HTMLInputElement | null> = {};

  const register: FormRegisterFields<T> = (name) => ({
    ref: (el: HTMLInputElement | null) => {
      if (el) {
        fields[name] = el;
        el.value = initialValues[name] as string;
      } else {
        if (fields[name]) {
          fields[name] = null;
        }
      }
    }
  });

  const getValues = (): T => {
    let values: any = {};

    for (let name in fields) {
      const field = fields[name];
      if (field) {
        const names = name.split(/[\[\].]+/).filter((part) => part.length > 0);
        let last = values;
        for (let i = 0; i < names.length; i++) {
          if (i === names.length - 1) {
            last[names[i]] = field.value;
          } else {
            last[names[i]] = last[names[i]] || (isNaN(Number(names[i + 1])) ? {} : []);
            last = last[names[i]];
          }
        }
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
