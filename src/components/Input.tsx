type InputProps = {
  label: string;
  placeholder?: string;
  autoComplete?: string;
};

export const Input = (props: InputProps): JSX.Element => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700" htmlFor="name">
        {props.label}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        autoComplete={props.autoComplete}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        placeholder={props.placeholder}
      />
    </>
  );
};

Input.defaultProps = {
  autoComplete: "off",
};
