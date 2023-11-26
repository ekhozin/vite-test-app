import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@packages/ui-kit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Hello, i am host app!
      </h1>
      <p>
        Counter: {count}
      </p>
      <p>
        <Button onClick={() => setCount(s => s + 1)}>
          Click me
        </Button>
      </p>
      <hr />
      <ul>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App
