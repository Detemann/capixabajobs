import HeaderNavbar from "../components/HeaderNavbar/HeaderNavbar";
import JobBox from "../components/Job/JobBox";

function Home() {
  
  return (
    <div className="mx-5">
      <HeaderNavbar logoFull={ false } showUserIcon={ true } />
      {/* <h1>VAGAS</h1>
      <Button variant="contained" onClick={buttonHandler}>Login</Button> */}
      <JobBox />
    </div>
  );
}

export default Home;
