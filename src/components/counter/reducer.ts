import { useReducer } from 'react';

export type CounterState = {
  count: number;
};

export type CounterAction = { type: 'increment' };

const initialState: CounterState = { count: 0 };

const increment = (state: CounterState) => ({ ...state, count: state.count + 1 });

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'increment':
      return increment(state);
  }
};

export function useCounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}
