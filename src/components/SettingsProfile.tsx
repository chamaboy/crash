import { RefreshIcon } from "@heroicons/react/outline";

import { useAuth } from "../lib/auth";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export const SettingsProfile = (): JSX.Element => {
  const auth = useAuth();
  return (
    <div className="my-8 md:my-12">
      <label
        className="flex flex-col items-center cursor-pointer"
        htmlFor="avatar"
      >
        <input className="hidden" id="avatar" type="file" />
        <Avatar src={auth.user?.photoUrl} size="md" />
        <div className="inline-flex items-center text-xs font-bold text-gray-500 mt-2  hover:text-indigo-500">
          <RefreshIcon className="w-4 h-4 mr-1" />
          <span>変更する</span>
        </div>
      </label>
      <div className="mt-6 md:mt-0">
        <Input label="名前" placeholder="例) キャッシュレス太郎" />
        <div className="mt-6">
          <Textarea
            label="自己紹介"
            placeholder="例) 電子マネーが大好きです"
            key="about"
          />
        </div>
        <div className="mt-8 text-center">
          <Button name="更新する" />
        </div>
      </div>
    </div>
  );
};
