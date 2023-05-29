import { Button } from "@mui/material";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";

function LoginHeader() {
  return (
    <div className="d-flex justify-content-between">
      <HeaderNavbar showThemeIcons="true" />
      <Button
        className="w-auto px-5 me-5 mb-1 align-self-center text-nowrap headerButton"
        style={{ textTransform: "revert", fontSize: 20, borderRadius: 30 }}
        variant="outlined"
      >
        Cadastre-se agora
      </Button>
    </div>
  );
}

export default LoginHeader;