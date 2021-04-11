import { RefreshIcon } from "@heroicons/react/outline";

import { useAuth } from "../lib/auth";
import { Avatar } from "./Avatar";

export const SettingsProfile = (): JSX.Element => {
  const auth = useAuth();
  return (
    <div className="mt-8 md:mt-12">
      <label
        className="flex flex-col items-center cursor-pointer"
        htmlFor="avatar"
      >
        <input className="hidden" id="avatar" type="file" />
        <Avatar src={auth.user?.photoUrl} size="md" />
        <div className="inline-flex items-center text-xs font-bold text-gray-500 mt-2  hover:text-indigo-600">
          <RefreshIcon className="w-4 h-4 mr-1" />
          <span>変更する</span>
        </div>
      </label>
    </div>
  );
};
