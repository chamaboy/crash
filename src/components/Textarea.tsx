type TextareaProps = {
  label: string;
  rows?: number;
  placeholder?: string;
  key: string;
};

export const Textarea = (props: TextareaProps): JSX.Element => {
  return (
    <>
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={props.key}
      >
        {props.label}
      </label>
      <textarea
        name={props.key}
        id={props.key}
        rows={props.rows}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder={props.placeholder}
      ></textarea>
    </>
  );
};

Textarea.defaultProps = {
  rows: 4,
};
