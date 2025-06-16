import { NavLink, useLocation } from 'react-router-dom';
import '../assets/Style/navbar.css'

const Navbar = () => {
  let loc =useLocation()
  let bool = loc.pathname.startsWith('/adminportal')
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div className="container-fluid">
      {/* Clickable logo to go to home */}
      <NavLink to={bool ? "/adminportal/" : "/userportal/"} className="navbar-brand ms-3 fs-3 fw-bold">
      LibraVault
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto fs-5">
          {bool ? (
            <>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/adminportal/">Home</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/adminportal/books">Books</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/adminportal/addbooks">Add Books</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/adminportal/users">Users</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/adminportal/addusers">Add Users</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/">Logout</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/userportal/">Home</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/userportal/books">Books</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/userportal/users">Users</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/userportal/cart">Cart</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/">Logout</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
