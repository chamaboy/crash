import type { ReactNode } from "react";
import { createContext, useContext } from "react";

import firebase from "./firebase";

type AuthContextProps = {
  user: string | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({
  user: undefined || "test",
});

export const AuthProvider = (props: { children: ReactNode }): JSX.Element => {
  const auth = { user: "test" };
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
