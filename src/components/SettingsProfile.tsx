import { RefreshIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "../lib/auth";
import { updateUser } from "../lib/user-db";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { ErrorMessage } from "./ErrorMessage";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

type FormInputs = {
  name: string;
  profile: string;
};

export const SettingsProfile = (): JSX.Element => {
  const auth = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    const userData = { uid: auth.user?.uid, ...data };
    updateUser(userData).then(() => {
      return alert("データを更新しました");
    });
  };

  const nameValidators = {
    required: true,
    maxLength: 40,
  };
  const profileValidators = { maxLength: 160 };

  useEffect(() => {
    const userName = auth.user?.name as string;
    const profile = auth.user?.profile;
    setValue("name", userName);
    if (profile) {
      setValue("profile", profile);
    }
  }, [auth.user, setValue]);

  return (
    <div className="my-8 md:my-12 md:flex md:justify-between md:gap-8">
      <label
        className="flex flex-col items-center cursor-pointer md:mt-2 md:mb-36"
        htmlFor="avatar"
      >
        <input className="hidden" id="avatar" type="file" />
        <Avatar src={auth.user?.photoUrl} size="md" />
        <div className="inline-flex items-center text-xs font-bold text-gray-500 mt-2  hover:text-indigo-500">
          <RefreshIcon className="w-4 h-4 mr-1" />
          <span>変更する</span>
        </div>
      </label>
      <div className="mt-6 md:mt-0 md:flex-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="名前"
            placeholder="例) キャッシュレス太郎"
            formLabel="name"
            register={register}
            validators={nameValidators}
          />
          {errors.name?.type === "required" && (
            <ErrorMessage text="必須入力です" />
          )}
          {errors.name?.type === "maxLength" && (
            <ErrorMessage text={`最大${nameValidators.maxLength}文字です`} />
          )}
          <div className="mt-6">
            <Textarea
              label="自己紹介"
              placeholder="例) 電子マネーが大好きです"
              formLabel="profile"
              register={register}
              validators={profileValidators}
            />
            {errors.profile?.type === "maxLength" && (
              <ErrorMessage
                text={`最大${profileValidators.maxLength}文字です`}
              />
            )}
          </div>
          <div className="mt-8 text-center">
            <Button name="更新する" />
          </div>
        </form>
      </div>
    </div>
  );
};
