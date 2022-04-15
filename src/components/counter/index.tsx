import { useAppContext } from 'app/context';

export type CounterProps = {};

export function Counter(props: CounterProps) {
  const { user, counter } = useAppContext();

  const handleClick = async () => {
    counter.dispatch({ type: 'increment' });
  };

  return (
    <div>
      <span>
        Oi {user.state.name}, você clicou {counter.state.count} vezes
      </span>
      <button onClick={() => handleClick()}>Click</button>
    </div>
  );
}
