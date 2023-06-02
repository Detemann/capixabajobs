import { Button } from "@mui/material";
import HeaderNavbar from "../components/HeaderNavbar/HeaderNavbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const buttonHandler = () => {navigate('/login')}
  
  return (
    <>
      <HeaderNavbar />
      <h1>VAGAS</h1>
      <Button variant="contained" onClick={buttonHandler}>Login</Button>
    </>
  );
}

export default Home;
