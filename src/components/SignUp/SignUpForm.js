import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

function SignUpForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(inputs, "Submitted!");
  };

  return (
    <form className="d-flex col justify-content-center h-auto">
      <Card className="d-flex flex-wrap justify-content-center align-content-center w-50">
        <div className="product-signup-logo mb-2"></div>
        <h3 className="mb-1 w-100">Bem-Vindo ao CapixabaJobs</h3>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          label="Nome Completo"
          variant="outlined"
          type="text"
          autoFocus={true}
          className="w-75 mb-4 mt-5"
        />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          label="E-mail"
          variant="outlined"
          type="email"
          className="w-75 mb-4"
        />
        <TextField
          name="senha"
          value={inputs.password}
          onChange={handleChange}
          label="Senha"
          variant="outlined"
          type="password"
          className="w-75 mb-4"
        />
        <Button
          type="submit"
          className=" w-50 mb-4 p-2"
          variant="contained"
          onClick={handleClick}
        >
          Inscrever-se
        </Button>
      </Card>
    </form>
  );
}

export default SignUpForm;
