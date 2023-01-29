import axios, { AxiosResponse } from 'axios';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { StreamChat } from 'stream-chat';

type AuthContext = {
  signup: UseMutationResult<AxiosResponse, unknown, User>;
  login: UseMutationResult<{ token: string; user: string }, unknown, User>;
};

const Context = createContext<AuthContext | null>(null);

export function useAuth() {
  return useContext(Context) as AuthContext;
}

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  image?: string;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();

  const signup = useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user);
    },
    onSuccess() {
      navigate('/login');
    },
  });
  const login = useMutation({
    mutationFn: (id: string) => {
      return axios
        .post(`${import.meta.env.VITE_SERVER_URL}/login`, {
          id,
        })
        .then((res) => {
          return res.data as { token: string; user: User };
        });
    },
    onSuccess(data) {
      setUser(data.user);
      setToken(data.token);
    },
  });

  useEffect(() => {
    if (token == null || user == null) return;

    const chat = new StreamChat(import.meta.env.VITE_STREAM_API_KEY!);
  }, [token, user]);

  return (
    <Context.Provider value={{ signup, login }}>{children}</Context.Provider>
  );
}
