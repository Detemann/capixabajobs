import { Button, TextField } from "@mui/material";
import Login3party from "./Login3party";
import { Link } from "react-router-dom";

function LoginFields() {
  return (
    <>
      <div className="d-flex row col align-content-center">
        <div className="d-flex row justify-content-center ms-4">
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            className="w-75 m-4"
          />
          <TextField
            id="outlined-password-basic"
            label="Senha"
            variant="outlined"
            type="password"
            className="w-75 m-4 mt-1"
          />
          <br></br>
          <Link
            for="/home"
            className="m-2 text-decoration-none"
            style={{ color: "#00816D", paddingLeft: 55 }}
          >
            Esqueceu a senha?
          </Link>
          <br></br>
          <Button variant="contained" className="w-75 m-4 mt-4">
            Entrar
          </Button>
          <hr className="mt-4"></hr>
          <Login3party />
        </div>
      </div>
    </>
  );
}

export default LoginFields;
