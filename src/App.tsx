import { useState } from 'react'
import ReactLogo from './assets/react.svg?react'
import './App.css'

const sum = (a: number, b: number) => {
  return a + b;
};

function App() {
  const [count, setCount] = useState(0)

  const res = sum(3, 2);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <ReactLogo style={{ color: '#f00' }} />
        </a>
      </div>
      <h1>Vite + React + TS</h1>
      <p>{res}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
