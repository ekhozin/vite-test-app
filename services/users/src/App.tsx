import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <p>Users app module</p>
      <ul>
        <li>
          <Link to='/users'>page home</Link>
        </li>
        <li>
          <Link to='/users/users-one'>page one</Link>
        </li>
        <li>
          <Link to='/users/users-two'>page two</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}

export default App
