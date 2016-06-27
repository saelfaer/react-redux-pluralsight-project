import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <IndexLink to="/" className="navbar-brand" activeClassName="active">Courses Admin</IndexLink>

          <ul className="nav navbar-nav">
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/courses" activeClassName="active">Courses</Link></li>
          </ul>
        </div>
        {loading && <p className="navbar-text navbar-right"><LoadingDots interval={100} dots={50}/></p>}
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
