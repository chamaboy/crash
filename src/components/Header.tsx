import { useAuth } from "../lib/auth";
import { Button } from "./Button";

export const Header = (): JSX.Element => {
  const auth = useAuth();
  console.log(auth);
  return (
    <header className="bg-white flex items-center justify-between h-16 px-4 sm:px-6">
      <h1>crash</h1>
      {auth.user === "login" ? (
        <Button name="ログアウト" />
      ) : (
        <Button name="ログイン" />
      )}
    </header>
  );
};
