import { useEffect } from 'react';
import { useAppContext } from 'app/context';

export function Cursor() {
  const { user, cursor } = useAppContext();

  useEffect(() => {
    const listener = (evt: MouseEvent) => {
      cursor.dispatch({ type: 'update', payload: [evt.clientX, evt.clientY] });
    };
    document.addEventListener('mousemove', listener);
    return () => {
      document.removeEventListener('mousemove', listener);
    };
  }, []);

  const { name } = user.state;
  const { position } = cursor.state;

  return (
    <div>
      Oi {name}, o seu mouse está na posição {position[0]} x {position[1]}
    </div>
  );
}
