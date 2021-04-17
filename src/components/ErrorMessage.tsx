import { ExclamationCircleIcon } from "@heroicons/react/solid";

export const ErrorMessage: React.VFC<{ text: string }> = (props: {
  text: string;
}) => {
  return (
    <p className="mt-2 text-sm flex items-center text-red-400">
      <ExclamationCircleIcon className="w-4 h-4 mr-1" />
      {props.text}
    </p>
  );
};
