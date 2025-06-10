import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
type SessionContextType = {
  session: boolean;
  setSession: (val:boolean) => void;
};
type SessionProviderType = {
  children: ReactNode;
};
const SessionContext = createContext<SessionContextType | undefined>(undefined);

const SessionProvider = ({ children }: SessionProviderType) => {
  const [session, setSessionState] = useState<boolean>(() => {
    const stored = localStorage.getItem("session");
    return stored === "true";
  });
  const setSession = (value: boolean) => {
    localStorage.setItem("session", value.toString());
    setSessionState(value);
  };
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within SessionProvider");
  }
  return context;
};
export { useSession, SessionProvider };
