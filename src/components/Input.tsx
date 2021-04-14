import type { Path, UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  placeholder?: string;
  autoComplete?: string;
  formLabel: Path<any>;
  register: UseFormRegister<any>;
  required: boolean;
};

export const Input = (props: InputProps): JSX.Element => {
  const {
    label,
    placeholder,
    autoComplete,
    formLabel,
    register,
    required,
  } = props as InputProps;
  return (
    <>
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={formLabel}
      >
        {label}
      </label>
      <input
        type="text"
        id={formLabel}
        autoComplete={autoComplete}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
        {...register(formLabel, { required })}
      />
    </>
  );
};

Input.defaultProps = {
  autoComplete: "off",
};
