import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const Layout = ({ isAdminLoggedIn, isUserLoggedIn }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar isAdminLoggedIn={isAdminLoggedIn} isUserLoggedIn={isUserLoggedIn} />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  isAdminLoggedIn: PropTypes.bool.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
};

export default Layout;
