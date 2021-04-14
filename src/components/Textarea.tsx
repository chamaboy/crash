import type { Path, UseFormRegister } from "react-hook-form";

type TextareaProps = {
  label: string;
  rows?: number;
  placeholder?: string;
  formLabel: Path<any>;
  register: UseFormRegister<any>;
  required: boolean;
};

export const Textarea = (props: TextareaProps): JSX.Element => {
  const {
    label,
    rows,
    placeholder,
    formLabel,
    register,
    required,
  } = props as TextareaProps;
  return (
    <>
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={formLabel}
      >
        {label}
      </label>
      <textarea
        id={formLabel}
        rows={rows}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
        {...register(formLabel, { required })}
      ></textarea>
    </>
  );
};

Textarea.defaultProps = {
  rows: 4,
};
