import { FormEventHandler } from 'react';
import { useAppContext } from 'app/context';

export type UserProps = {};

export function User(props: UserProps) {
  const { user } = useAppContext();

  const handleInput: FormEventHandler<HTMLInputElement> = async evt => {
    user.dispatch({ type: 'rename', payload: evt.currentTarget.value });
  };

  return (
    <div>
      <input type="text" placeholder="Name" onInput={handleInput} value={user.state.name} />
    </div>
  );
}
