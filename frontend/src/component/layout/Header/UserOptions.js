import React, { Fragment, useState } from 'react';
import './Header.css';
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import HomeIcon from '@material-ui/icons/Home';
import Backdrop from '@material-ui/core/Backdrop';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { logout } from '../../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserOptions = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();

  const options = [
    {
      icon: <ShoppingCartIcon style={{ color: cartItems.length > 0 ? 'tomato' : 'unset' }} />,
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToAppIcon />, name: 'Logout', func: logoutUser },
  ];

  if (user.role === 'admin') {
    options.unshift({
      icon: <DashboardIcon />,
      name: 'Dashboard',
      func: dashboard,
    });
  }

  function dashboard() {
    history.push('/admin/dashboard');
  }

  function orders() {
    history.push('/orders');
  }
  function account() {
    history.push('/account');
  }
  function cart() {
    history.push('/cart');
  }
  function logoutUser() {
    dispatch(logout());
    alert.success('Logout Successfully');
  }

  return (
    <Fragment>
      <div className="flexNav">
        <Link to="/">
          <i className="homeButton">
            <HomeIcon />
          </i>
        </Link>
        <Link onClick={cart}>
          <i className="shoppingCart">
            <ShoppingCartIcon />
          </i>
        </Link>
        <Link onClick={logoutUser}>
          <i className="logoutIcon">
            <ExitToAppIcon />
          </i>
        </Link>
      </div>
    </Fragment>
  );
};

export default UserOptions;
