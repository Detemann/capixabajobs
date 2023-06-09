import { Fab } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './HeaderNavbar.scss';

function HeaderNavbar(props) {
  const navigate = useNavigate();

  const buttonHandler = () => {navigate('/home')};

  return (
    <>
      <div className={ `d-flex w-100` }>
        <header className="app-header d-flex justify-content-between w-100 align-items-center">
          <button className="btn btn-logo p-0" onClick={ buttonHandler }>
            <div className={ props.logoFull ?  'product-logo-full' : 'product-logo-min' }></div>
          </button>

          { props.showUserIcon &&
            <Fab color="secondary" aria-label="edit" className="btn-user">
              <AccountCircleRoundedIcon fontSize="large" />
            </Fab>
          }
        </header>
      </div>
    </>
  )
}

export default HeaderNavbar;