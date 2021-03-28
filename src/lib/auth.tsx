import type { User } from "firebase";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

import type { UserData } from "../types/user";
import { firebase } from "./firebase";
import { createUser, getUser } from "./user-db";

type AuthContextProps = {
  user: UserData | undefined;
  loading: boolean;
  signinWithGoogle: () => Promise<void>;
  signout: () => Promise<void>;
};

const authContext = createContext<AuthContextProps>({
  user: undefined,
  loading: false,
  signinWithGoogle: async () => {
    return;
  },
  signout: async () => {
    return;
  },
});

export const AuthProvider = (props: { children: ReactNode }): JSX.Element => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>{props.children}</authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState<UserData | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const formatUser = (user: User) => {
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0]?.providerId,
      photoUrl: user.photoURL,
    };
  };

  const handleUser = async (rawUser: User | null | false) => {
    if (rawUser) {
      const userData: UserData = await getUser(rawUser.uid);
      if (!userData) {
        const user = formatUser(rawUser);
        await createUser(user);
      }
      setLoading(false);
      setUser(userData);
      return userData;
    } else {
      setLoading(true);
      setUser(undefined);
      return false;
    }
  };

  const signinWithGoogle = async (): Promise<void> => {
    setLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        handleUser(res.user);
      });
  };

  const signout = async (): Promise<void> => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => {
      return unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    signinWithGoogle,
    signout,
  };
};
