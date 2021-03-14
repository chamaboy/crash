import { Button } from "./Button";

export const Header = (): JSX.Element => {
  return (
    <header className="bg-white flex items-center justify-between h-16 px-4 sm:px-6">
      <h1>crash</h1>
      <Button name="ログイン" />
    </header>
  );
};
