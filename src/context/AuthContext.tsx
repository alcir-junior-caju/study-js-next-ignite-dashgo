import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { api } from "../services/api";

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isAuthenticated: boolean;
  user: User;
};

export const signOut = () => {
  destroyCookie(undefined, 'goDash.token');
  destroyCookie(undefined, 'goDash.refreshToken');

  Router.push('/');
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'goDash.token': token } = parseCookies();

    if (token) {
      api.get('/me')
        .then(response => {
          const { email, permissions, roles } = response.data;

          setUser({ email, permissions, roles });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post('/sessions', {
        email,
        password
      });

      const { token, refreshToken, permissions, roles } = response.data;

      setCookie(undefined, 'goDash.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });
      setCookie(undefined, 'goDash.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      setUser({
        email,
        permissions,
        roles
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      if (isAuthenticated) Router.push('/dashboard');

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
