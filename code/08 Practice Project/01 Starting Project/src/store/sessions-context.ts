import { createContext, useContext } from "react";

export interface Session {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
}

interface SessionsState {
  upcomingSessions: Session[];
}

interface SessionsContextValue extends SessionsState {
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
}

const SessionsContext = createContext<SessionsContextValue | null>(null);

export function useSessionsContext() {
  const context = useContext(SessionsContext);
  if (!context) {
    throw new Error(
      "useSessionsContext must be used within a SessionsContextProvider"
    );
  }
  return context;
}
