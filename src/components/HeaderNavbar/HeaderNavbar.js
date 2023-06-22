import { Fab, Avatar, Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import userAvatar from "../../assets/images/wanderson.jpeg";
import "./HeaderNavbar.scss";

function HeaderNavbar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const allowedNavbarClick = [
    '/home',
    '/perfil',
  ];

  const buttonHandler = () => {
    if (allowedNavbarClick.includes(location.pathname)) {
      navigate("/home");
    }
  };
  const userButtonHandler = () => {
    navigate("/perfil");
  };

  const logoutButtonHandler = () => {
    navigate("/login")
  }

  return (
    <>
      <div className={`d-flex w-100`}>
        <header className="app-header d-flex justify-content-between w-100 align-items-center">
          <button className="btn btn-logo p-0" onClick={buttonHandler}>
            <div
              className={
                props.logoFull ? "product-logo-full" : "product-logo-min"
              }
            ></div>
          </button>

          {props.showUserIcon && (
            <Fab
              color="secondary"
              aria-label="edit"
              className="btn-user"
              onClick={userButtonHandler}
            >
              <AccountCircleRoundedIcon fontSize="large" />
            </Fab>
          )}

          {props.userAvatar && (
            <div
              className="btn-user d-flex flex-column align-items-center"
            >
              <Fab
                color="secondary"
                aria-label="edit"
                onClick={userButtonHandler}
              >
                <Avatar alt='wanderson' src={userAvatar} />
              </Fab>

              <Button
                className="p-0 mt-2 w-100"
                variant="outlined"
                color="error"
                onClick={logoutButtonHandler}
              >
                Sair
              </Button>
            </div>
          )}
        </header>
      </div>
    </>
  );
}

export default HeaderNavbar;
