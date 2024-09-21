import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

function Root () {
  return (
    <div>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/info">
          Info
        </Link>
        <Link to="/contacts">
          Contacts
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Home () {
  return (
    <div>Home page</div>
  );
}

function Info () {
  return (
    <div>Info page</div>
  );
}

function Contacts () {
  return (
    <div>Contacts page</div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          element={<Root />}
        >
          <Route
            element={<Home />}
            index
          />
          <Route
            element={<Info />}
            path="/info"
          />
          <Route
            element={<Contacts />}
            path="/contacts"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
