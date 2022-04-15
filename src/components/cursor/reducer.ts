import { useReducer } from 'react';

export type CursorState = {
  position: [number, number];
};

export type CursorAction = { type: 'update'; payload: [number, number] };

const initialState: CursorState = { position: [0, 0] };

const update = (state: CursorState, position: [number, number]) => ({ ...state, position });

const reducer = (state: CursorState, action: CursorAction) => {
  switch (action.type) {
    case 'update':
      return update(state, action.payload);
  }
};

export function useCursorReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}
