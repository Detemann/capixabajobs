import { Button } from "@mui/material";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";

function LoginHeader() {
    return(
        <div className="d-flex justify-content-between">
            <HeaderNavbar showThemeIcons="true" />
            <Button className="w-auto px-5 me-5 align-self-center text-nowrap" style={{borderRadius: 30, fontSize: 25, textTransform: "revert"}} variant="outlined">Cadastre-se agora</Button>
        </div>
    );
}

export default LoginHeader;