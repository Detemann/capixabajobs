import HeaderNavbar from "../components/HeaderNavbar/HeaderNavbar";
import { useNavigate } from "react-router-dom";
import JobBox from "../components/Job/JobBox";

function Home() {
  const navigate = useNavigate();
  const buttonHandler = () => {navigate('/login')}
  
  return (
    <div className="ms-5 me-5">
      <HeaderNavbar logoFull={ false } showUserIcon={ true } />
      {/* <h1>VAGAS</h1>
      <Button variant="contained" onClick={buttonHandler}>Login</Button> */}
      <JobBox />
    </div>
  );
}

export default Home;
