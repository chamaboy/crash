type ButtonProps = {
  name: string;
  onClick: () => Promise<void>;
};

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={props.onClick}
      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {props.name}
    </button>
  );
};
