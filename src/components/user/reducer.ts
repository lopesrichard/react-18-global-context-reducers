import { useReducer } from 'react';

export type UserState = {
  name: string;
};

export type UserAction = { type: 'rename'; payload: string };

const initialState: UserState = { name: '' };

const rename = (state: UserState, name: string) => ({ ...state, name });

const reducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'rename':
      return rename(state, action.payload);
  }
};

export function useUserReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}
