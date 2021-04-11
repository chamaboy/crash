import Head from "next/head";

import { SettingsProfile } from "../components/SettingsProfile";

const Settings = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>プロフィールの編集</title>
      </Head>
      <div className="pt-10">
        <h1>設定</h1>
        <SettingsProfile />
      </div>
    </>
  );
};

export default Settings;
