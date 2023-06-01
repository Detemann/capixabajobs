import { Button, TextField } from "@mui/material";
import Login3party from "./Login3party";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginFields() {
  const [inputs, setInputs] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs, "Submited!");
  };

  return (
    <>
      <form
        className="d-flex row align-content-end justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="d-flex flex-wrap justify-content-center">
          <TextField
            name="email"
            value={inputs.email}
            onChange={handleChange}
            label="E-mail"
            variant="outlined"
            className="w-75"
            margin="normal"
          />
          <TextField
            name="senha"
            value={inputs.senha}
            onChange={handleChange}
            label="Senha"
            variant="outlined"
            type="password"
            className="w-75"
            margin="normal"
          />
        </div>
        <div className="d-flex ps-2 w-75 p-0 m-0">
          <Link
            for="#"
            className="text-decoration-none"
            style={{ color: "#00816D" }}
          >
            Esqueceu a senha?
          </Link>
        </div>
        <div className="d-flex row flex-wrap justify-content-center">
          <Button type="submit" variant="contained" className="w-50 m-4 mt-4">
            Entrar
          </Button>
          <hr className="mt-lg-4"></hr>
          <Login3party />
        </div>
      </form>
    </>
  );
}

export default LoginFields;
