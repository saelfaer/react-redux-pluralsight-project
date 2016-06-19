import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <IndexLink to="/" className="navbar-brand" activeClassName="active">Pluralsight Admin</IndexLink>

          <ul className="nav navbar-nav">
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/courses" activeClassName="active">Courses</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
