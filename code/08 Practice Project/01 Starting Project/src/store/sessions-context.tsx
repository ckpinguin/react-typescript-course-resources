import { createContext, type ReactNode, useContext, useReducer } from "react";

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

interface BookSessionAction {
  type: "BOOK_SESSION";
  session: Session;
}

interface CancelSessionAction {
  type: "CANCEL_SESSION";
  sessionId: string;
}

type SessionsAction = BookSessionAction | CancelSessionAction;

function SessionsReducer(state: SessionsState, action: SessionsAction) {
  switch (action.type) {
    case "BOOK_SESSION":
      if (
        state.upcomingSessions.some(
          (session) => session.id === action.session.id
        )
      ) {
        return state;
      }
      return {
        ...state,
        upcomingSessions: [...state.upcomingSessions, action.session],
      };
    case "CANCEL_SESSION":
      return {
        ...state,
        upcomingSessions: state.upcomingSessions.filter(
          (session) => session.id !== action.sessionId
        ),
      };
    default:
      return state;
  }
}

export default function SessionsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(SessionsReducer, {
    upcomingSessions: [],
  });

  function bookSession(session: Session) {
    dispatch({ type: "BOOK_SESSION", session });
  }

  function cancelSession(sessionId: string) {
    dispatch({ type: "CANCEL_SESSION", sessionId });
  }

  const ctxValue: SessionsContextValue = {
    ...state,
    bookSession,
    cancelSession,
  };

  return (
    <SessionsContext.Provider value={ctxValue}>
      {children}
    </SessionsContext.Provider>
  );
}
