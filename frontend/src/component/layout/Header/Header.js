import React, { Fragment } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <Link to="/login">
        <i className="loginButton">
          <PersonIcon />
        </i>
      </Link>
    </Fragment>
  );
};

export default Header;
