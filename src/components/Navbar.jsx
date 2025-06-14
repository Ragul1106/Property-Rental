import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, login, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">RentalApp</Link>
      <div className="ms-auto">
        {user ? (
          <>
            <span className="me-3">Welcome, {user.name}</span>
            <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
          </>
        ) : (
          <button className="btn btn-outline-primary" onClick={login}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
