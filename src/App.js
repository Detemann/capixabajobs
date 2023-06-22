import React from "react";
import "./App.scss";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Perfil from "./pages/Perfil";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#00816D",
        dark: "#245652",
      },
      secondary: {
        main: "#e64a19",
      },
    },
    typography: {
      fontFamily: [ 'Inter' ],
      allVariants: {
        color: '#202020',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="perfil" element={<Perfil/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
