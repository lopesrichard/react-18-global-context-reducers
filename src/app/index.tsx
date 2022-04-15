import { Counter } from 'components/counter';
import { Cursor } from 'components/cursor';
import { User } from 'components/user';

import { ContextProvider } from 'app/context';

function App() {
  return (
    <ContextProvider>
      <User />
      <Counter />
      <Cursor />
    </ContextProvider>
  );
}

export default App;
