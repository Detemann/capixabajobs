import HeaderNavbar from "../components/HeaderNavbar/HeaderNavbar";
import feedSignUpImage from "../assets/images/feed_draw_singup.svg";
import SignUpForm from "../components/SignUp/SignUpForm";
import "../components/SignUp/SignUp.scss";



function Signup() {
  return (
    <>
      <HeaderNavbar />
      <div className="d-flex row p-0 m-0">
        <img src={feedSignUpImage} alt="feed" style={{width: "45%"}}/>
        <SignUpForm />
      </div>
    </>
  );
}

export default Signup;