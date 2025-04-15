"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { sendRequest } from "@/lib/sendRequest";
import { useToken } from "@/hooks/TokenContext";
import { UserData } from "@/lib/types";

interface UserContextType {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  userLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const { token, loading } = useToken();
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    if (!token || loading) return;
    setUserLoading(true);
  
    const fetchUser = async () => {
      try {
        const res = await sendRequest.get("/user/current", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data.user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      } finally {
        setUserLoading(false); 
      }
    };
  
    fetchUser();
  }, [token, loading]);
    

  return (
    <UserContext.Provider value={{ userData, setUserData, userLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
