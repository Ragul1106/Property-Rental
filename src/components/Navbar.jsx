// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">RentalApp</Link>
      <div className="ms-auto d-flex gap-3 align-items-center">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-primary" onClick={login}>Login</button>
            <Link className="btn btn-outline-success" to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
