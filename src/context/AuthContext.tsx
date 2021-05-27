import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies';

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
  isAuthenticated: boolean;
  user: User;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'goDash.token': token } = parseCookies();

    if (token) {
      fetch('http://localhost:3333/me', {
        headers: new Headers({
          'Authorization': `Bearer ${token}`
        })
      })
        .then(response => response.json())
        .then(data => {
          const { email, permissions, roles } = data;
          setUser({
            email,
            permissions,
            roles
          });
        });
    }
  }, []);

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await fetch('http://localhost:3333/sessions', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      });
      const {
        permissions,
        roles,
        token,
        refreshToken
      } = await response.json();

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

      if (isAuthenticated) Router.push('/dashboard');

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
