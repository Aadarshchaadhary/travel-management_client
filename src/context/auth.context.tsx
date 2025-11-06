/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { IUser } from "../@types/auth.types";
import { useQuery } from "@tanstack/react-query";
import { me } from "../api/auth.api";

type IAuthContext = {
  user: IUser | null;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<any>>;
};

const initialValue: IAuthContext = {
  user: null,
  isLoading: true,
  setUser: () => {},
};

// creating auth context
const AuthContext = React.createContext<IAuthContext>(initialValue);

// provider component
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);

  const { data, isLoading } = useQuery({
    queryFn: me,
    queryKey: ["check_auth"],
    retry: false,
  });

  useEffect(() => {
    if (data) {
      setUser(data?.data);
    }
  }, [data]);

  return (
    <AuthContext.Provider
      value={{ user: user || data?.data, isLoading: isLoading, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
