import type { Path, UseFormRegister } from "react-hook-form";

type Validators = {
  required: boolean;
  maxLength?: number;
};

type InputProps = {
  label: string;
  placeholder?: string;
  autoComplete?: string;
  formLabel: Path<any>;
  register: UseFormRegister<any>;
  validators: Validators;
};

export const Input = (props: InputProps): JSX.Element => {
  const {
    label,
    placeholder,
    autoComplete,
    formLabel,
    register,
    validators,
  } = props as InputProps;
  const { required, maxLength } = validators;
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
        {...register(formLabel, { required, maxLength })}
      />
    </>
  );
};

Input.defaultProps = {
  autoComplete: "off",
};
