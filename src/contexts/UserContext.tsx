import {createContext, useState} from "react";

export type User = {
  is_authenticated: boolean;
  userData?: {
    name: string;
    password: string;
    email: string;
    id: string;
  };
};

export const UserContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
} | null>(null);

export function UserProvider({children}: React.PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
