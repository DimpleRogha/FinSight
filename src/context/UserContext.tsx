import React, { createContext, useState } from "react";

interface UserContextType {
  name: string;
  setName: (name: string) => void;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("Dimple");

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}