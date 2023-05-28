import LoginHeader from "../components/Login/LoginHeader";
import LoginFields from "../components/Login/LoginFields";
import LoginImage from "../components/Login/LoginImage";
import "../components/Login/Login.scss";


function Login() {
  return (
    <>
      <LoginHeader />
      <div className="d-flex row">
        <LoginFields />
        <LoginImage />
      </div>
    </>
  );
}

export default Login;