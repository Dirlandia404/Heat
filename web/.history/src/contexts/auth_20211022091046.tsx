import { createContext, ReactNode } from "react";

const AuthContext = createContext(null);

type User = {
  id: string;
  name: string;
  avatar_url: string;
  login: string;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
};
const AuthContextData = createContext({} as AuthContextData);
type AuthProvider = {
  children: ReactNode;
};

export function AuthProvider(props: AuthProvider) {
  return (
    <AuthContext.Provider value={null}>{props.children}</AuthContext.Provider>
  );
}
