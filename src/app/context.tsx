import { createContext, Dispatch, ReactNode, useContext } from 'react';

import { CounterAction, CounterState, useCounterReducer } from 'components/counter/reducer';
import { CursorAction, CursorState, useCursorReducer } from 'components/cursor/reducer';
import { UserAction, UserState, useUserReducer } from 'components/user/reducer';

type AppContext = {
  counter: { state: CounterState; dispatch: Dispatch<CounterAction> };
  cursor: { state: CursorState; dispatch: Dispatch<CursorAction> };
  user: { state: UserState; dispatch: Dispatch<UserAction> };
};

const AppContext = createContext<AppContext>({} as AppContext);

type ContextProviderProps = {
  children: ReactNode;
};

export function ContextProvider(props: ContextProviderProps) {
  const reducers = {
    counter: useCounterReducer(),
    cursor: useCursorReducer(),
    user: useUserReducer(),
  };
  return <AppContext.Provider value={reducers}>{props.children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
