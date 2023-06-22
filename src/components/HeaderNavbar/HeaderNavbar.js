import { Fab, Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import userAvatar from "../../assets/images/wanderson.jpeg";
import "./HeaderNavbar.scss";

function HeaderNavbar(props) {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/home");
  };
  const userButtonHandler = () => {
    navigate("/perfil");
  };

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
            <Fab
              color="secondary"
              aria-label="edit"
              className="btn-user"
              onClick={userButtonHandler}
            >
              <Avatar alt='wanderson' src={userAvatar} />
            </Fab>
          )}
        </header>
      </div>
    </>
  );
}

export default HeaderNavbar;
