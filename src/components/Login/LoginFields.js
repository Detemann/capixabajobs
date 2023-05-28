import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function LoginFields() {
  return (
    <>
        <div className="d-flex row col-4 align-content-center">
          <div>
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
              className="w-75 m-4 mt-0"
            />
            <br></br>
            <Link
              for="/home"
              className="m-4 text-decoration-none"
              style={{ color: "#00816D" }}
            >
              Esqueceu a senha?
            </Link>
            <br></br>
            <Button variant="contained" className="w-75 m-4 mt-4">
              Entrar
            </Button>
          </div>
        </div>
    </>
  );
}

export default LoginFields;
