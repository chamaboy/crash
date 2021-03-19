import { useAuth } from "../lib/auth";
import { Button } from "./Button";

export const Header = (): JSX.Element => {
  const auth = useAuth();
  return (
    <header className="bg-white flex items-center justify-between h-16 px-4 sm:px-6">
      <h1>crash</h1>
      {auth.user ? (
        <Button name="ログアウト" onClick={auth.signout} />
      ) : (
        <Button name="ログイン" onClick={auth.signinWithGoogle} />
      )}
    </header>
  );
};
