import { createContext, ReactNode } from "react";
import { useEffect } from "react";
import { api } from "../services/api";
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
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=6294ab292a7129034ee9`;

  type AuthResponse = {
    token: string;
    user: {
      id: string;
      avatar_url: string;
      name: string;
      login: string;
    };
  };
  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>("authenticate", {
      code: githubCode,
    });

    const { token, user } = response.data;
    localStorage.setItem("@dowhile:token", token);
    console.log(user);
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split("?code=");
      window.history.pushState({}, "", urlWithoutCode);
      signIn(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider value={null}>{props.children}</AuthContext.Provider>
  );
}
