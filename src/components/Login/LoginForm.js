import { Button, TextField } from "@mui/material";
import Login3party from "./Login3party";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginFields() {
  const [inputs, setInputs] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (event) => {
    setInputs((prevState)=>({
      ...prevState,
      [event.target.name] : event.target.value 
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs, "Submited!");
  }

  return (
    <>
      <form className="d-flex row col align-content-center" onSubmit={handleSubmit}>
        <div className="d-flex row justify-content-center ms-4">
          <TextField
            name='email'
            value={inputs.email}
            onChange={handleChange}
            label="E-mail"
            variant="outlined"
            className="w-75 m-4"
          />
          <TextField
            name='senha'
            value={inputs.senha}
            onChange={handleChange}
            label="Senha"
            variant="outlined"
            type="password"
            className="w-75 m-4 mt-1"
          />
          <br></br>
          <Link
            for="#"
            className="m-2 text-decoration-none"
            style={{ color: "#00816D", paddingLeft: 55 }}
          >
            Esqueceu a senha?
          </Link>
          <br></br>
          <Button type="submit" variant="contained" className="w-75 m-4 mt-4">
            Entrar
          </Button>
          <hr className="mt-4"></hr>
          <Login3party />
        </div>
      </form>
    </>
  );
}

export default LoginFields;
