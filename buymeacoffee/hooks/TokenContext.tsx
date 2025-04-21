"use client";

import {
  createContext,
  useEffect,
  PropsWithChildren,
  useState,
  useContext,
} from "react";

type TokenContextType = {
  token: string | null;
  loading: boolean;
};

const TokenContext = createContext<TokenContextType>({
  token: null,
  loading: true,
});

export const TokenProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false);
  }, []);

  return (
    <TokenContext.Provider value={{ token, loading }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
