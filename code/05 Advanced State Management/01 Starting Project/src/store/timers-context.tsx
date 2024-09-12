import { createContext, useContext, useReducer, type ReactNode } from "react";

export interface Timer {
  name: string;
  duration: number;
}

interface TimersState {
  isRunning: boolean;
  timers: Timer[];
}

const initialState: TimersState = {
  timers: [],
  isRunning: true,
};

interface TimersContextValue extends TimersState {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error(
      "TimersContext is null, it must only be used inside components or hooks!"
    );
  }
  return timersCtx;
}

interface TimersContextProviderProps {
  children: ReactNode;
}

type StartTimersAction = {
  type: "START_TIMERS";
};
type StopTimersAction = {
  type: "STOP_TIMERS";
};
type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  if (action.type === "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [...state.timers, action.payload],
    };
  }
  return state;
}

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    ...timersState,
    addTimer(timerData: Timer) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

export default TimersContextProvider;
