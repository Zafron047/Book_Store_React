import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css';
import { ImUser } from 'react-icons/im';

const Nav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <nav className="nav-container">
      <h1 className="nav-header">Bookstore CMS</h1>
      <ul className="link-list">
        <li>
          <Link
            to="/"
            className={`link-style ${activeLink === '/' ? 'active-link-style' : ''}`}
            onClick={() => handleNavLinkClick('/')}
          >
            BOOKS
          </Link>
        </li>
        <li>
          <Link
            to="/Categories"
            className={`link-style ${activeLink === '/categories' ? 'active-link-style' : ''}`}
            onClick={() => handleNavLinkClick('/categories')}
          >
            CATEGORIES
          </Link>
        </li>
      </ul>
      <div className="logo-container">
        <span className="profile-icon primary-color"><ImUser /></span>
      </div>
    </nav>
  );
};

export default Nav;
