import React from "react";
import "./App.scss";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Singup from "./pages/Signup";

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
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="singup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
