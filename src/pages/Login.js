import LoginHeader from "../components/Login/LoginHeader";
import LoginFields from "../components/Login/LoginFields";
import LoginImage from "../components/Login/LoginImage";


function Login() {
  return (
    <div className="d-flex row ms-5 me-2">
      <LoginHeader />
      <div className="d-flex">
        <LoginFields />
        <LoginImage />
      </div>
    </div>
  );
}

export default Login;