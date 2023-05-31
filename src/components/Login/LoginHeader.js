import { Button } from "@mui/material";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import { useNavigate } from "react-router-dom";

function LoginHeader() {
  const navigate = useNavigate();

  const buttonHandler = () => {navigate('/singup')};

  return (
    <div className="d-md-flex d-lg-flex justify-content-between">
      <HeaderNavbar showThemeIcons="true" />
      <Button
        className="w-auto px-md-5 px-lg-5 me-md-0 me-lg-5 mb-1 align-self-center text-nowrap"
        style={{ textTransform: "revert", fontSize: 20, borderRadius: 30 }}
        variant="outlined"
        onClick={buttonHandler}
      >
        Cadastre-se agora
      </Button>
    </div>
  );
}

export default LoginHeader;