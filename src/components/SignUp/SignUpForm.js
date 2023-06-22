import { Alert, Box, Button, Card, LinearProgress, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "Usuário da Silva",
    email: "email.usuario@outlook.com",
    password: "senha123",
  });

  const [isSnackbarOpen, setIsSnackBarOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    
    if (inputs.name.length > 0 && inputs.email.length > 0 && inputs.password.length > 0) {
      const timer = setInterval(() => {
        setProgress((atual) => {
          if (atual <= 99) {
            return atual + 11;
          } else {
            clearInterval(timer);
            return 100;
          }
        });
      }, 290);

      setIsSnackBarOpen(true);

    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  }

  const handleClose = () => {
    setIsSnackBarOpen(false);
    navigate('/login');
  }

  return (
    <>
      <form className="d-flex col justify-content-center h-auto">
        <Card className="d-flex flex-wrap flex-column align-items-center justify-content-center align-content-center w-50">
          <div className="product-signup-logo mb-2"></div>
          <h3 className="mb-1 w-100">Bem-vindo ao CapixabaJobs</h3>
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
            onClick={handleSubmitClick}
          >
            Inscrever-se
          </Button>
          <span>
            <span>
              Já possui cadastro?
            </span>
            <span 
              className="m-2 login-link cursor-pointer"
              onClick={handleLoginClick}
            >
              Faça login.
            </span>
          </span>
        </Card>
      </form>
      
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        // key={'bottom' + 'right'}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          elevation={6}
          style={{ backgroundColor: '#00816D' }}
        >
          <span>
            Cadastro realizado com sucesso!
          </span>
          <br/>
          <span>
            Iremos te redirecionar para fazer o login.
          </span>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        </Alert>
      </Snackbar>
    </>
  );
}

export default SignUpForm;
