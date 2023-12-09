import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  console.log('Layout!!!');

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
